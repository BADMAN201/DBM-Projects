{
  "name": "channel-created",
  "temp": "channelcreated",
  "event-type": "8",
  "_id": "AAVpZ",
  "actions": [
    {
      "channel": "3",
      "varName": "channelcreated",
      "info": "2",
      "storage": "1",
      "varName2": "channelname",
      "name": "Store Channel Info"
    },
    {
      "storage": "1",
      "varName": "channelname",
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
      "varName": "channelcreated",
      "info": "1",
      "storage": "1",
      "varName2": "id",
      "name": "Store Channel Info"
    },
    {
      "channel": "3",
      "varName": "channelcreated",
      "info": "6",
      "storage": "1",
      "varName2": "isnsfw",
      "name": "Store Channel Info"
    },
    {
      "channel": "3",
      "varName": "channelcreated",
      "info": "3",
      "storage": "1",
      "varName2": "category",
      "name": "Store Channel Info Things"
    },
    {
      "title": "Channel Created",
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
      "storage": "1",
      "varName": "embed",
      "fieldName": "Name",
      "message": "<#${tempVars(\"id\")}>",
      "inline": "0",
      "name": "Add Embed Field"
    },
    {
      "storage": "1",
      "varName": "category",
      "comparison": "0",
      "value": "",
      "iftrue": "0",
      "iftrueVal": "",
      "iffalse": "3",
      "iffalseVal": "3",
      "name": "Check Variable"
    },
    {
      "storage": "1",
      "varName": "embed",
      "fieldName": "Category",
      "message": "${tempVars(\"category\")}",
      "inline": "0",
      "name": "Add Embed Field"
    },
    {
      "storage": "2",
      "varName": "category",
      "name": "Save Variable"
    },
    {
      "count": "1",
      "name": "Skip Actions"
    },
    {
      "storage": "1",
      "varName": "embed",
      "fieldName": "Category",
      "message": "None",
      "inline": "0",
      "name": "Add Embed Field"
    },
    {
      "storage": "1",
      "varName": "embed",
      "message": "ID : ${tempVars(\"id\")}",
      "footerIcon": "",
      "name": "Set Embed Footer"
    },
    {
      "storage": "1",
      "varName": "embed",
      "channel": "6",
      "varName2": "mlchannel",
      "name": "Send Embed Message"
    }
  ]
}