{
  "name": "channel-updated",
  "temp": "channelbefore",
  "event-type": "23",
  "_id": "vXtCx",
  "actions": [
    {
      "channel": "3",
      "varName": "channelbefore",
      "info": "1",
      "storage": "1",
      "varName2": "channelbeforeid",
      "name": "Store Channel Info"
    },
    {
      "info": "0",
      "find": "${tempVars(\"channelbeforeid\")}",
      "storage": "1",
      "varName": "isvoice?",
      "name": "Find Voice Channel"
    },
    {
      "storage": "1",
      "varName": "isvoice?",
      "comparison": "0",
      "value": "",
      "iftrue": "2",
      "iftrueVal": "43",
      "iffalse": "0",
      "iffalseVal": "1",
      "name": "Check Variable"
    },
    {
      "channel": "3",
      "varName": "channelbefore",
      "info": "2",
      "storage": "1",
      "varName2": "channelbeforename",
      "name": "Store Channel Info"
    },
    {
      "channel": "3",
      "varName": "channelafter",
      "info": "2",
      "storage": "1",
      "varName2": "channelaftername",
      "name": "Store Channel Info"
    },
    {
      "storage": "1",
      "varName": "channelbeforename",
      "comparison": "5",
      "value": "ticket-",
      "iftrue": "1",
      "iftrueVal": "",
      "iffalse": "0",
      "iffalseVal": "",
      "name": "Check Variable"
    },
    {
      "channel": "3",
      "varName": "channelbefore",
      "info": "6",
      "storage": "1",
      "varName2": "channelbeforeisnsfw",
      "name": "Store Channel Info"
    },
    {
      "channel": "3",
      "varName": "channelafter",
      "info": "6",
      "storage": "1",
      "varName2": "channelafterisnsfw",
      "name": "Store Channel Info"
    },
    {
      "channel": "3",
      "varName": "channelbefore",
      "info": "3",
      "storage": "1",
      "varName2": "channelbeforetopic",
      "name": "Store Channel Info"
    },
    {
      "channel": "3",
      "varName": "channelafter",
      "info": "3",
      "storage": "1",
      "varName2": "channelaftertopic",
      "name": "Store Channel Info"
    },
    {
      "channel": "3",
      "varName": "channelbefore",
      "info": "3",
      "storage": "1",
      "varName2": "channelbeforecategory",
      "name": "Store Channel Info Things"
    },
    {
      "channel": "3",
      "varName": "channelafter",
      "info": "3",
      "storage": "1",
      "varName2": "channelaftercategory",
      "name": "Store Channel Info Things"
    },
    {
      "title": "Channel \"${tempVars(\"channelbeforename\")}\" updated",
      "author": "",
      "color": "#20fc3a",
      "timestamp": "true",
      "url": "",
      "authorIcon": "",
      "imageUrl": "",
      "thumbUrl": "",
      "storage": "1",
      "varName": "embed",
      "name": "Create Embed Message"
    },
    {
      "comment": "Do not touch below",
      "color": "#ff0000",
      "name": "Comment"
    },
    {
      "storage": "1",
      "varName": "channelbeforename",
      "comparison": "1",
      "value": "tempVars(\"channelaftername\")",
      "iftrue": "0",
      "iftrueVal": "",
      "iffalse": "3",
      "iffalseVal": "4",
      "name": "Check Variable"
    },
    {
      "storage": "1",
      "varName": "UPDATEDchannelname",
      "changeType": "0",
      "value": "\"❌\"",
      "name": "Control Variable"
    },
    {
      "storage": "1",
      "varName": "NEWchannelname",
      "changeType": "0",
      "value": "tempVars(\"channelbeforename\")",
      "name": "Control Variable"
    },
    {
      "storage": "1",
      "varName": "embed",
      "fieldName": "Name",
      "message": "Updated: :x:",
      "inline": "0",
      "name": "Add Embed Field"
    },
    {
      "count": "3",
      "name": "Skip Actions"
    },
    {
      "storage": "1",
      "varName": "UPDATEDchannelname",
      "changeType": "0",
      "value": "\"✅\"",
      "name": "Control Variable"
    },
    {
      "storage": "1",
      "varName": "NEWchannelname",
      "changeType": "0",
      "value": "tempVars(\"channelaftername\")",
      "name": "Control Variable"
    },
    {
      "storage": "1",
      "varName": "embed",
      "fieldName": "Name",
      "message": "Updated: :white_check_mark:\nNew Name: ${tempVars(\"NEWchannelname\")}",
      "inline": "0",
      "name": "Add Embed Field"
    },
    {
      "comment": "Channel Topic",
      "color": "#ff0000",
      "name": "Comment"
    },
    {
      "storage": "1",
      "varName": "channelbeforetopic",
      "comparison": "1",
      "value": "tempVars(\"channelaftertopic\")",
      "iftrue": "0",
      "iftrueVal": "",
      "iffalse": "3",
      "iffalseVal": "4",
      "name": "Check Variable"
    },
    {
      "storage": "1",
      "varName": "UPDATEDchanneltopic",
      "changeType": "0",
      "value": "\"❌\"",
      "name": "Control Variable"
    },
    {
      "storage": "1",
      "varName": "NEWchanneltopic",
      "changeType": "0",
      "value": "tempVars(\"channelbeforetopic\")",
      "name": "Control Variable"
    },
    {
      "storage": "1",
      "varName": "embed",
      "fieldName": "Topic",
      "message": "Updated: :x:",
      "inline": "0",
      "name": "Add Embed Field"
    },
    {
      "count": "3",
      "name": "Skip Actions"
    },
    {
      "storage": "1",
      "varName": "UPDATEDchanneltopic",
      "changeType": "0",
      "value": "\"✅\"",
      "name": "Control Variable"
    },
    {
      "storage": "1",
      "varName": "NEWchanneltopic",
      "changeType": "0",
      "value": "tempVars(\"channelaftertopic\")",
      "name": "Control Variable"
    },
    {
      "storage": "1",
      "varName": "embed",
      "fieldName": "Topic",
      "message": "Updated: :white_check_mark:\nNew Topic: ${tempVars(\"NEWchanneltopic\")}",
      "inline": "0",
      "name": "Add Embed Field"
    },
    {
      "comment": "isNSFW",
      "color": "#ff0000",
      "name": "Comment"
    },
    {
      "storage": "1",
      "varName": "channelafterisnsfw",
      "comparison": "0",
      "value": "",
      "iftrue": "3",
      "iftrueVal": "4",
      "iffalse": "0",
      "iffalseVal": "4",
      "name": "Check Variable"
    },
    {
      "storage": "1",
      "varName": "UPDATEDchannelnsfw",
      "changeType": "0",
      "value": "\"❌\"",
      "name": "Control Variable"
    },
    {
      "storage": "1",
      "varName": "NEWchannelnsfw",
      "changeType": "0",
      "value": "tempVars(\"channelbeforensfw\")",
      "name": "Control Variable"
    },
    {
      "storage": "1",
      "varName": "embed",
      "fieldName": "Is NSFW?",
      "message": "Channel is NSFW: :x:",
      "inline": "0",
      "name": "Add Embed Field"
    },
    {
      "count": "3",
      "name": "Skip Actions"
    },
    {
      "storage": "1",
      "varName": "UPDATEDchannelnsfw",
      "changeType": "0",
      "value": "\"✅\"",
      "name": "Control Variable"
    },
    {
      "storage": "1",
      "varName": "NEWchannelnsfw",
      "changeType": "0",
      "value": "tempVars(\"channelafternsfw\")",
      "name": "Control Variable"
    },
    {
      "storage": "1",
      "varName": "embed",
      "fieldName": "Is NSFW?",
      "message": "Channel is NSFW: :white_check_mark:",
      "inline": "0",
      "name": "Add Embed Field"
    },
    {
      "storage": "1",
      "varName": "embed",
      "message": "ID : ${tempVars(\"channelbeforeid\")}",
      "footerIcon": "",
      "name": "Set Embed Footer"
    },
    {
      "storage": "1",
      "varName": "embed",
      "channel": "6",
      "varName2": "mlchannel",
      "name": "Send Embed Message"
    },
    {
      "name": "End Action Sequence"
    },
    {
      "channel": "3",
      "varName": "channelbefore",
      "info": "2",
      "storage": "1",
      "varName2": "vchannelbeforename",
      "name": "Store Voice Channel Info"
    },
    {
      "channel": "3",
      "varName": "channelafter",
      "info": "2",
      "storage": "1",
      "varName2": "vchannelaftername",
      "name": "Store Voice Channel Info"
    },
    {
      "channel": "3",
      "varName": "channelbefore",
      "info": "4",
      "storage": "1",
      "varName2": "vchannelbeforelimit",
      "name": "Store Voice Channel Info"
    },
    {
      "channel": "3",
      "varName": "channelafter",
      "info": "4",
      "storage": "1",
      "varName2": "vchannelafterlimit",
      "name": "Store Voice Channel Info"
    },
    {
      "channel": "3",
      "varName": "channelbefore",
      "info": "1",
      "storage": "1",
      "varName2": "vid",
      "name": "Store Voice Channel Info"
    },
    {
      "title": "Voice Channel \"${tempVars(\"vchannelbeforename\")}\" updated",
      "author": "",
      "color": "#20fc3a",
      "timestamp": "true",
      "url": "",
      "authorIcon": "",
      "imageUrl": "",
      "thumbUrl": "",
      "storage": "1",
      "varName": "embed2",
      "name": "Create Embed Message"
    },
    {
      "comment": "Do not touch below",
      "color": "#ff0000",
      "name": "Comment"
    },
    {
      "storage": "1",
      "varName": "vchannelbeforename",
      "comparison": "1",
      "value": "tempVars(\"vchannelaftername\")",
      "iftrue": "0",
      "iftrueVal": "",
      "iffalse": "3",
      "iffalseVal": "4",
      "name": "Check Variable"
    },
    {
      "storage": "1",
      "varName": "UPDATEDvchannelname",
      "changeType": "0",
      "value": "\"❌\"",
      "name": "Control Variable"
    },
    {
      "storage": "1",
      "varName": "NEWvchannelname",
      "changeType": "0",
      "value": "tempVars(\"vchannelbeforename\")",
      "name": "Control Variable"
    },
    {
      "storage": "1",
      "varName": "embed2",
      "fieldName": "Name",
      "message": "Updated: :x:",
      "inline": "0",
      "name": "Add Embed Field"
    },
    {
      "count": "3",
      "name": "Skip Actions"
    },
    {
      "storage": "1",
      "varName": "UPDATEDvchannelname",
      "changeType": "0",
      "value": "\"✅\"",
      "name": "Control Variable"
    },
    {
      "storage": "1",
      "varName": "NEWvchannelname",
      "changeType": "0",
      "value": "tempVars(\"vchannelaftername\")",
      "name": "Control Variable"
    },
    {
      "storage": "1",
      "varName": "embed2",
      "fieldName": "Name",
      "message": "Updated: :white_check_mark:\nNew Name: ${tempVars(\"NEWvchannelname\")}",
      "inline": "0",
      "name": "Add Embed Field"
    },
    {
      "comment": "Channel Topic",
      "color": "#ff0000",
      "name": "Comment"
    },
    {
      "storage": "1",
      "varName": "vchannelbeforelimit",
      "comparison": "1",
      "value": "tempVars(\"vchannelafterlimit\")",
      "iftrue": "0",
      "iftrueVal": "",
      "iffalse": "3",
      "iffalseVal": "4",
      "name": "Check Variable"
    },
    {
      "storage": "1",
      "varName": "UPDATEDvchannellimit",
      "changeType": "0",
      "value": "\"❌\"",
      "name": "Control Variable"
    },
    {
      "storage": "1",
      "varName": "NEWvchannellimit",
      "changeType": "0",
      "value": "tempVars(\"vchannelbeforelimit\")",
      "name": "Control Variable"
    },
    {
      "storage": "1",
      "varName": "embed2",
      "fieldName": "Limit",
      "message": "Updated: :x:",
      "inline": "0",
      "name": "Add Embed Field"
    },
    {
      "count": "3",
      "name": "Skip Actions"
    },
    {
      "storage": "1",
      "varName": "UPDATEDvchannellimit",
      "changeType": "0",
      "value": "\"✅\"",
      "name": "Control Variable"
    },
    {
      "storage": "1",
      "varName": "NEWvchannellimit",
      "changeType": "0",
      "value": "tempVars(\"vchannelafterlimit\")",
      "name": "Control Variable"
    },
    {
      "storage": "1",
      "varName": "embed2",
      "fieldName": "Limit",
      "message": "Updated: :white_check_mark:\nNew Limit: ${tempVars(\"NEWvchannellimit\")}",
      "inline": "0",
      "name": "Add Embed Field"
    },
    {
      "storage": "1",
      "varName": "embed2",
      "message": "ID: ${tempVars(\"vid\")}",
      "footerIcon": "",
      "name": "Set Embed Footer"
    },
    {
      "storage": "1",
      "varName": "embed2",
      "channel": "6",
      "varName2": "mlchannel",
      "name": "Send Embed Message"
    }
  ],
  "temp2": "channelafter"
}