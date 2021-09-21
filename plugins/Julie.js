const Julie = require("../events");
const Config = require("../config");
const fs = require('fs');
const julia = fs.readFileSync('./allmedia/help.mp3')

if (Config.WORKTYPE == 'private') {

  Julie.addCommand({ pattern: "help ?(.*)", fromMe: true, dontAddCommandList: true },
  async (message, match) => {
    let CMD_HELP = "";
    Julie.commands.map(async (command) => {
      if (
        command.dontAddCommandList === false &&
        command.pattern !== undefined
      ) {
        try {
          var match = command.pattern
            .toString()
            .match(/(\W*)([A-Za-z0-9ğüşiöç]*)/);
        } catch {
          var match = [command.pattern];
        }

        let HANDLER = "";

        if (/\[(\W*)\]/.test(Config.HANDLERS)) {
          HANDLER = Config.HANDLERS.match(/\[(\W*)\]/)[1][0];
        } else {
          HANDLER = ".";
        }
        CMD_HELP += '*🤖' + 
          (match.length >= 3 ? HANDLER + match[2] : command.pattern) + '*\n' +
          (command.desc === ""
            ? "\n"
            : " ".repeat(8 - match[2].length) + " \n📙 ");
        if (command.desc !== "")
          CMD_HELP +=  command.desc + (command.usage === "" ? "\n\n" : "\n\n");
      }
    });
    await message.client.sendMessage(message.jid, julia, MessageType.audio, {mimetype: 'audio/mp4', ptt:true}, {quoted: message.data})
    await message.client.sendMessage(message.jid, '⚍⚍⚍⚍⚍⚍⚍⚍⚍⚍⚍⚍⚍⚍⚍⚍⚍⚍\n' + ' ```⚕️ Büññy®Bot Help Panel ⚕️```\n' + '⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎\n' + CMD_HELP, MessageType.text, {quoted: message.data});
  }
);

Julie.addCommand({ pattern: "list ?(.*)", fromMe: false, dontAddCommandList: true },
  async (message, match) => {
    let CMD_HELP = "";
    Julie.commands.map(async (command) => {
      if (
        command.dontAddCommandList === false &&
        command.pattern !== undefined
      ) {
        try {
          var match = command.pattern
            .toString()
            .match(/(\W*)([A-Za-z0-9ğüşiöç]*)/);
        } catch {
          var match = [command.pattern];
        }

        let HANDLER = "";

        if (/\[(\W*)\]/.test(Config.HANDLERS)) {
          HANDLER = Config.HANDLERS.match(/\[(\W*)\]/)[1][0];
        } else {
          HANDLER = ".";
        }
        CMD_HELP += '*🤖' + 
          (match.length >= 3 ? HANDLER + match[2] : command.pattern) + '*\n' +
          (command.desc === ""
            ? "\n"
            : " ".repeat(8 - match[2].length) + " \n📙 ");
        if (command.desc !== "")
          CMD_HELP +=  command.desc + (command.usage === "" ? "\n\n" : "\n\n");
      }
    });
    await message.client.sendMessage(message.jid, julia, MessageType.audio, {mimetype: 'audio/mp4', ptt:true}, {quoted: message.data})
    await message.client.sendMessage(message.jid, '⚍⚍⚍⚍⚍⚍⚍⚍⚍⚍⚍⚍⚍⚍⚍⚍⚍⚍\n' + ' ```⚕️ Büññy®Bot Help Panel ⚕️```\n' + '⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎\n' + CMD_HELP, MessageType.text, {quoted: message.data});
  }
);
Julie.addCommand({ pattern: "help ?(.*)", fromMe: false, dontAddCommandList: true },
async (message, match) => {
  let CMD_HELP = "";
  Julie.commands.map(async (command) => {
    if (
      command.dontAddCommandList === false &&
      command.pattern !== undefined
    ) {
      try {
        var match = command.pattern
          .toString()
          .match(/(\W*)([A-Za-z0-9ğüşiöç]*)/);
      } catch {
        var match = [command.pattern];
      }

      let HANDLER = "";

      if (/\[(\W*)\]/.test(Config.HANDLERS)) {
        HANDLER = Config.HANDLERS.match(/\[(\W*)\]/)[1][0];
      } else {
        HANDLER = ".";
      }
      CMD_HELP += '*🤖♂️' + 
        (match.length >= 3 ? HANDLER + match[2] : command.pattern) + '*\n' +
        (command.desc === ""
          ? "\n"
          : " ".repeat(8 - match[2].length) + " \n📙 ");
      if (command.desc !== "")
        CMD_HELP +=  command.desc + (command.usage === "" ? "\n\n" : "\n\n");
    }
  });
  await message.client.sendMessage(message.jid, julia, MessageType.audio, {mimetype: 'audio/mp4', ptt:true}, {quoted: message.data})
  await message.client.sendMessage(message.jid, '⚍⚍⚍⚍⚍⚍⚍⚍⚍⚍⚍⚍⚍⚍⚍⚍⚍⚍\n' + ' ```⚕️ Büññy®Bot Help Panel ⚕️```\n' + '⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎\n' + CMD_HELP, MessageType.text, {quoted: message.data});
}
);

Julie.addCommand({ pattern: "list ?(.*)", fromMe: true, dontAddCommandList: true },
async (message, match) => {
  let CMD_HELP = "";
  Julie.commands.map(async (command) => {
    if (
      command.dontAddCommandList === false &&
      command.pattern !== undefined
    ) {
      try {
        var match = command.pattern
          .toString()
          .match(/(\W*)([A-Za-z0-9ğüşiöç]*)/);
      } catch {
        var match = [command.pattern];
      }

      let HANDLER = "";

      if (/\[(\W*)\]/.test(Config.HANDLERS)) {
        HANDLER = Config.HANDLERS.match(/\[(\W*)\]/)[1][0];
      } else {
        HANDLER = ".";
      }
      CMD_HELP += '*🤖' + 
        (match.length >= 3 ? HANDLER + match[2] : command.pattern) + '*\n' +
        (command.desc === ""
          ? "\n"
          : " ".repeat(8 - match[2].length) + " \n📙 ");
      if (command.desc !== "")
        CMD_HELP +=  command.desc + (command.usage === "" ? "\n\n" : "\n\n");
    }
  });
  await message.client.sendMessage(message.jid, julia, MessageType.audio, {mimetype: 'audio/mp4', ptt:true}, {quoted: message.data})
  await message.client.sendMessage(message.jid, '⚍⚍⚍⚍⚍⚍⚍⚍⚍⚍⚍⚍⚍⚍⚍⚍⚍⚍\n' + ' ```⚕️ Büññy®Bot Help Panel ⚕️```\n' + '⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎\n' + CMD_HELP, MessageType.text, {quoted: message.data});
}
);
}

else if (Config.WORKTYPE == 'public') {

  Julie.addCommand({ pattern: "help ?(.*)", fromMe: false, dontAddCommandList: true },
    async (message, match) => {
      let CMD_HELP = "";
      Julie.commands.map(async (command) => {
        if (
          command.dontAddCommandList === false &&
          command.pattern !== undefined
        ) {
          try {
            var match = command.pattern
              .toString()
              .match(/(\W*)([A-Za-z0-9ğüşiöç]*)/);
          } catch {
            var match = [command.pattern];
          }
  
          let HANDLER = "";
  
          if (/\[(\W*)\]/.test(Config.HANDLERS)) {
            HANDLER = Config.HANDLERS.match(/\[(\W*)\]/)[1][0];
          } else {
            HANDLER = ".";
          }
          CMD_HELP += '*🤖' + 
            (match.length >= 3 ? HANDLER + match[2] : command.pattern) + '*\n' +
            (command.desc === ""
              ? "\n"
              : " ".repeat(8 - match[2].length) + " \n📙 ");
          if (command.desc !== "")
            CMD_HELP +=  command.desc + (command.usage === "" ? "\n\n" : "\n\n");
        }
      });
      await message.client.sendMessage(message.jid, julia, MessageType.audio, {mimetype: 'audio/mp4', ptt:true}, {quoted: message.data})
      await message.client.sendMessage(message.jid, '⚍⚍⚍⚍⚍⚍⚍⚍⚍⚍⚍⚍⚍⚍⚍⚍⚍⚍\n' + ' ```⚕️ Büññy®Bot Help Panel ⚕️```\n' + '⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎\n' + CMD_HELP, MessageType.text, {quoted: message.data});
    }
  );

  Julie.addCommand({ pattern: "list ?(.*)", fromMe: false, dontAddCommandList: true },
    async (message, match) => {
      let CMD_HELP = "";
      Julie.commands.map(async (command) => {
        if (
          command.dontAddCommandList === false &&
          command.pattern !== undefined
        ) {
          try {
            var match = command.pattern
              .toString()
              .match(/(\W*)([A-Za-z0-9ğüşiöç]*)/);
          } catch {
            var match = [command.pattern];
          }
  
          let HANDLER = "";
  
          if (/\[(\W*)\]/.test(Config.HANDLERS)) {
            HANDLER = Config.HANDLERS.match(/\[(\W*)\]/)[1][0];
          } else {
            HANDLER = ".";
          }
          CMD_HELP += '*🤖' + 
            (match.length >= 3 ? HANDLER + match[2] : command.pattern) + '*\n' +
            (command.desc === ""
              ? "\n"
              : " ".repeat(8 - match[2].length) + " \n📙 ");
          if (command.desc !== "")
            CMD_HELP +=  command.desc + (command.usage === "" ? "\n\n" : "\n\n");
        }
      });
      await message.client.sendMessage(message.jid, julia, MessageType.audio, {mimetype: 'audio/mp4', ptt:true}, {quoted: message.data})
      await message.client.sendMessage(message.jid, '⚍⚍⚍⚍⚍⚍⚍⚍⚍⚍⚍⚍⚍⚍⚍⚍⚍⚍\n' + ' ```⚕️ Büññy®Bot Help Panel ⚕️```\n' + '⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎\n' + CMD_HELP, MessageType.text, {quoted: message.data});
    }
  );

  }
