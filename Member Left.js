{
  "name": "member-left",
  "temp": "member",
  "event-type": "7",
  "_id": "sJMAW",
  "actions": [
    {
      "member": "2",
      "varName": "member",
      "info": "1",
      "storage": "1",
      "varName2": "id",
      "name": "Store Member Info"
    },
    {
      "member": "2",
      "varName": "member",
      "info": "16",
      "storage": "1",
      "varName2": "avatar",
      "name": "Store Member Info"
    },
    {
      "server": "0",
      "varName": "",
      "info": "17",
      "storage": "1",
      "varName2": "mcount",
      "name": "Store Server Things"
    },
    {
      "member": "2",
      "varName": "member",
      "info": "7",
      "storage": "1",
      "varName2": "tag",
      "name": "Store Member Things"
    },
    {
      "title": "Member Left",
      "author": "",
      "color": "#3dd0f4",
      "timestamp": "true",
      "url": "",
      "authorIcon": "",
      "imageUrl": "",
      "thumbUrl": "${tempVars(\"avatar\")}",
      "storage": "1",
      "varName": "embed",
      "name": "Create Embed Message"
    },
    {
      "storage": "1",
      "varName": "embed",
      "fieldName": "User",
      "message": "${tempVars(\"tag\")}",
      "inline": "0",
      "name": "Add Embed Field"
    },
    {
      "storage": "1",
      "varName": "embed",
      "fieldName": "Member Count",
      "message": "${tempVars(\"mcount\")}",
      "inline": "0",
      "name": "Add Embed Field"
    },
    {
      "storage": "1",
      "varName": "embed",
      "message": "ID: ${tempVars(\"id\")}",
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