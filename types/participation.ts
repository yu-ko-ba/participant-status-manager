export enum Participation {
  will,
  in,
  finish,
}

export namespace Participation {
  export type StringType = "参加予定" | "参加中" | "帰宅";

  export const toString = (
    status: Participation,
  ): StringType => {
    switch (status) {
      case Participation.will:
        return "参加予定";
      case Participation.in:
        return "参加中";
      case Participation.finish:
        return "帰宅";
    }
  };

  export const fromParticipationStringType = (
    status: StringType,
  ): Participation => {
    switch (status) {
      case "参加予定":
        return Participation.will;
      case "参加中":
        return Participation.in;
      case "帰宅":
        return Participation.finish;
    }
  };

  export const mergeStatus = (
    a: Participation,
    b: Participation,
  ): Participation => {
    return Math.max(a, b);
  };
}
