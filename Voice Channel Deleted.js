{
  "name": "v-channel-deleted",
  "temp": "channeldeleted",
  "event-type": "15",
  "_id": "XQYqW",
  "actions": [
    {
      "channel": "3",
      "varName": "channeldeleted",
      "info": "1",
      "storage": "1",
      "varName2": "id",
      "name": "Store Voice Channel Info"
    },
    {
      "channel": "3",
      "varName": "channeldeleted",
      "info": "2",
      "storage": "1",
      "varName2": "name",
      "name": "Store Voice Channel Info"
    },
    {
      "channel": "3",
      "varName": "channeldeleted",
      "info": "4",
      "storage": "1",
      "varName2": "limit",
      "name": "Store Voice Channel Info"
    },
    {
      "title": "Voice Channel Deleted",
      "author": "",
      "color": "RED",
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
      "message": "${tempVars(\"name\")}",
      "inline": "0",
      "name": "Add Embed Field"
    },
    {
      "storage": "1",
      "varName": "limit",
      "comparison": "0",
      "value": "",
      "iftrue": "0",
      "iftrueVal": "2",
      "iffalse": "3",
      "iffalseVal": "2",
      "name": "Check Variable"
    },
    {
      "storage": "1",
      "varName": "embed",
      "fieldName": "User Limit",
      "message": "${tempVars(\"limit\")}",
      "inline": "0",
      "name": "Add Embed Field"
    },
    {
      "count": "1",
      "name": "Skip Actions"
    },
    {
      "storage": "1",
      "varName": "embed",
      "fieldName": "User Limit",
      "message": "No Limit Set",
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