export enum Participation {
  will,
  in,
  finish,
}

export namespace Participation {
  export const toString = (
    status: Participation,
  ): "参加予定" | "参加中" | "帰宅" => {
    switch (status) {
      case Participation.will:
        return "参加予定";
      case Participation.in:
        return "参加中";
      case Participation.finish:
        return "帰宅";
    }
  };

  export const mergeStatus = (
    a: Participation,
    b: Participation,
  ): Participation => {
    return Math.max(a, b);
  };
}
