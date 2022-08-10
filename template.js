const request_info_template = {
  blocks: [
    {
      type: "section",
      text: {
        type: "plain_text",
        text: ":wave: Hey There!\n\nPlease provide below information ",
        emoji: true,
      },
    },
    {
      type: "divider",
    },
    {
      type: "input",
      element: {
        type: "plain_text_input",
        action_id: "plain_text_input-action",
      },
      label: {
        type: "plain_text",
        text: "Enter your name ",
        emoji: true,
      },
    },
    {
      type: "input",
      element: {
        type: "static_select",
        placeholder: {
          type: "plain_text",
          text: "Select an item",
          emoji: true,
        },
        options: [
          {
            text: {
              type: "plain_text",
              text: "admin",
              emoji: true,
            },
            value: "value-0",
          },
          {
            text: {
              type: "plain_text",
              text: "operator",
              emoji: true,
            },
            value: "value-1",
          },
          {
            text: {
              type: "plain_text",
              text: "other",
              emoji: true,
            },
            value: "value-2",
          },
        ],
        action_id: "static_select-action",
      },
      label: {
        type: "plain_text",
        text: "Select Role ",
        emoji: true,
      },
    },
    {
      type: "input",
      element: {
        type: "multi_static_select",
        placeholder: {
          type: "plain_text",
          text: "Select options",
          emoji: true,
        },
        options: [
          {
            text: {
              type: "plain_text",
              text: "*this is plain_text text*",
              emoji: true,
            },
            value: "value-0",
          },
          {
            text: {
              type: "plain_text",
              text: "*this is plain_text text*",
              emoji: true,
            },
            value: "value-1",
          },
          {
            text: {
              type: "plain_text",
              text: "*this is plain_text text*",
              emoji: true,
            },
            value: "value-2",
          },
        ],
        action_id: "multi_static_select-action",
      },
      label: {
        type: "plain_text",
        text: "Select Environment",
        emoji: true,
      },
    },
    {
      type: "input",
      element: {
        type: "static_select",
        placeholder: {
          type: "plain_text",
          text: "Select an item",
          emoji: true,
        },
        options: [
          {
            text: {
              type: "plain_text",
              text: "Approver1 ",
              emoji: true,
            },
            value: "value-0",
          },
          {
            text: {
              type: "plain_text",
              text: "Approver 2",
              emoji: true,
            },
            value: "value-1",
          },
          {
            text: {
              type: "plain_text",
              text: "Approver 3",
              emoji: true,
            },
            value: "value-2",
          },
        ],
        action_id: "static_select-action",
      },
      label: {
        type: "plain_text",
        text: "Select approver",
        emoji: true,
      },
    },
    {
      type: "actions",
      elements: [
        {
          type: "button",
          text: {
            type: "plain_text",
            text: "Submit",
            emoji: true,
          },
          value: "click_me_123",
          action_id: "actionId-0",
        },
      ],
    },
  ],
};

module.exports = {
  request_info_template,
};
