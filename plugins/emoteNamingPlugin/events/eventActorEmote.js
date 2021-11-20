export const id = "EVENT_ACTOR_EMOTE";

export const fields = [
  {
    key: "actorId",
    type: "actor",
    defaultValue: "$self$"
  },
  {
    key: "emoteId",
    type: "select",
    options: [
      [0, "Shock"],
      [1, "Question"],
      [2, "Love"],
      [3, "Pause"],
      [4, "Look"],
      [5, "Sweat"],
      [6, "Music"],
      [7, "Sleep"]
    ],
    defaultValue: 0,
  }
];

export const compile = (input, helpers) => {
  const { actorSetActive, actorEmote } = helpers;
  actorSetActive(input.actorId);
  actorEmote(input.emoteId);
};