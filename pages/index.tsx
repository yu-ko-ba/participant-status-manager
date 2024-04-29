import { RootPageComponent } from "@/components/RootPageComponent";
import { Event } from "@/types/Event";
import { Participant } from "@/types/Participant";
import { Participation } from "@/types/participation";
import Head from "next/head";
import { useState } from "react";

export default function Home() {
  const [events, setEvents] = useState<Event[]>([]);

  const onParticipationChanged = (
    participation: Participation,
    eventsIndex: number,
    participantsIndex: number,
  ) => {
    setEvents(events.map((event: Event, index: number) => {
      if (index != eventsIndex) {
        return event;
      }

      return {
        ...event,
        participants: event.participants.map(
          (participant: Participant, index: number) => {
            if (index != participantsIndex) {
              return participant;
            }

            return {
              ...participant,
              status: participation,
            };
          },
        ),
      };
    }));
  };

  const onSettleStatusChanged = (
    settled: boolean,
    eventsIndex: number,
    participantsIndex: number,
  ) => {
    setEvents(events.map((event: Event, index: number) => {
      if (index != eventsIndex) {
        return event;
      }

      return {
        ...event,
        participants: event.participants.map(
          (participant: Participant, index: number) => {
            if (index != participantsIndex) {
              return participant;
            }

            return {
              ...participant,
              isSettled: settled,
            };
          },
        ),
      };
    }));
  };

  const onAddParticipantButtonClicked = (
    newParticipantName: string,
    index: number,
  ) => {
    setEvents(events.map((e: Event, i: number) => {
      if (i != index) {
        return e;
      }

      return {
        ...e,
        participants: [
          ...e.participants,
          new Participant(newParticipantName),
        ],
      };
    }));
  };

  const onCreateEventButtonClicked = (name: string, website: string) => {
    setEvents([
      ...events,
      {
        name: name,
        website: website,
        participants: [],
      },
    ]);
  };

  return (
    <>
      <Head>
        <title>参加者名簿管理（デモ版）</title>
      </Head>

      <RootPageComponent
        events={events}
        onParticipationChanged={onParticipationChanged}
        onSettleStatusChanged={onSettleStatusChanged}
        onAddParticipantButtonClicked={onAddParticipantButtonClicked}
        onCreateEventButtonClicked={onCreateEventButtonClicked}
      />
    </>
  );
}
