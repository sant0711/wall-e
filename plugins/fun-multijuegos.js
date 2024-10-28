let handler = async (m, { conn, command, text, usedPrefix }) => {
if (!text) throw `${lenguajeGB['smsAvisoMG']()}𝙀𝙏𝙄𝙌𝙐𝙀𝙏𝙀 @𝙏𝘼𝙂 𝙊 𝙀𝙎𝘾𝙍𝙄𝘽𝘼 𝙀𝙇 𝙉𝙊𝙈𝘽𝙍𝙀\n𝙏𝘼𝙂 𝙎𝙊𝙈𝙀𝙊𝙉𝙀 @𝙏𝘼𝙂 𝙊𝙍 𝙏𝙔𝙋𝙀 𝙏𝙃𝙀 𝙉𝘼𝙈𝙀` 

if (command == 'cachuda') {
let juego = `_*${text.toUpperCase()}* *ES/IS* *${(100).getRandom()}%* *GAY*_ 🏳️‍🌈`.trim()
await conn.reply(m.chat, juego, m, m.mentionedJid ? { mentions: m.mentionedJid } : {})}

 // ------------------------------------------------------------------------------------------------------------------------------------------------
  
if (command == 'adoptada') { 
let juego = `_*${text.toUpperCase()}* *ES/IS* *${(100).getRandom()}%* *${command.replace('how', '').toUpperCase()}*_ sus padres se fueron x pañales 😞😂`.trim()
await conn.reply(m.chat, juego, m, m.mentionedJid ? { mentions: m.mentionedJid } : {})}
  
// ------------------------------------------------------------------------------------------------------------------------------------------------
  
if (command == 'cachudo') {
let juego = `_*${text.toUpperCase()}* *ES/IS* *${(100).getRandom()}%* *${command.replace('how', '').toUpperCase()}*_ 😂😂`.trim()
await conn.reply(m.chat, juego, m, m.mentionedJid ? { mentions: m.mentionedJid } : {})}
  
// ------------------------------------------------------------------------------------------------------------------------------------------------
  
if (command == 'adoptado') {
let juego = `_*${text.toUpperCase()}* *ES/IS* *${(100).getRandom()}%* *${command.replace('how', '').toUpperCase()}*_ Sus padres se fueron x pañales 😞😂`.trim()
await conn.reply(m.chat, juego, m, m.mentionedJid ? { mentions: m.mentionedJid } : {})}
  
// ------------------------------------------------------------------------------------------------------------------------------------------------
  
if (command == 'sinpito') {
let juego = `_*${text.toUpperCase()}* *ES/IS* *${(100).getRandom()}%* *${command.replace('how', '').toUpperCase()},* *ASI CREE QUE LA TIENE GRANDE? 😂 XD*_`.trim()
await conn.reply(m.chat, juego, m, m.mentionedJid ? { mentions: m.mentionedJid } : {})}


// ------------------------------------------------------------------------------------------------------------------------------------------------
  
if (command == 'sinpoto') {
let juego = `_*${text.toUpperCase()}* *ES/IS* *${(100).getRandom()}%* *${command.replace('how', '').toUpperCase()},* *NO TIENE NI POTO MAS PLANA 😂XD*_`.trim()
await conn.reply(m.chat, juego, m, m.mentionedJid ? { mentions: m.mentionedJid } : {})}

 // ------------------------------------------------------------------------------------------------------------------------------------------------
  
if (command == 'sintetas') {
let juego = `_*${text.toUpperCase()}* *ES/IS* *${(100).getRandom()}%* *${command.replace('how', '').toUpperCase()},* *NO TIENE NI TETAS Y SE CREE TETONA? 😂 XD*_`.trim()
await conn.reply(m.chat, juego, m, m.mentionedJid ? { mentions: m.mentionedJid } : {})}
  
// ------------------------------------------------------------------------------------------------------------------------------------------------  
  
if (command == 'feo') {
let juego = `_*${text.toUpperCase()}* *ES* *${(100).getRandom()}%* *${command.replace('how', '').toUpperCase()},* *MEJOR MÁTATE HERMANO 🤢*_`.trim()
await conn.reply(m.chat, juego, m, m.mentionedJid ? { mentions: m.mentionedJid } : {})}
  
// ------------------------------------------------------------------------------------------------------------------------------------------------ 
  
if (command == 'fea') {
let juego = `_*${text.toUpperCase()}* *ES* *${(100).getRandom()}%* *${command.replace('how', '').toUpperCase()} ASI SE CREÍA HERMOSA? 😂*_`.trim()
await conn.reply(m.chat, juego, m, m.mentionedJid ? { mentions: m.mentionedJid } : {})}
  
// ------------------------------------------------------------------------------------------------------------------------------------------------   
  
if (command == 'negro') {
let juego = `_*${text.toUpperCase()}* *ES* *${(100).getRandom()}%* *${command.replace('how', '').toUpperCase()} 👨🏾‍🦱, MAS NEGRO QUE SU POTO? 😂*_`.trim()
await conn.reply(m.chat, juego, m, m.mentionedJid ? { mentions: m.mentionedJid } : {})}
  
// ------------------------------------------------------------------------------------------------------------------------------------------------   
  
if (command == 'negra') {
let juego = `_*${text.toUpperCase()}* *ES* *${(100).getRandom()}%* *${command.replace('how', '').toUpperCase()} 👱🏾‍♀️, MAS NEGRA QUE SU CUCA? 😂*_`.trim()
await conn.reply(m.chat, juego, m, m.mentionedJid ? { mentions: m.mentionedJid } : {})}
  
 // ------------------------------------------------------------------------------------------------------------------------------------------------   
if (command == 'LOVE2') {
let juego = `*❤️❤️ MEDIDOR DE AMOR ❤️❤️*\n*_El amor de ${text.toUpperCase()} ES DE ${(100).getRandom()}% Deberias pedirle que sea tu  novia/o ?_*`.trim()
await conn.reply(m.chat, juego, m, m.mentionedJid ? { mentions: m.mentionedJid } : {})}
//Sisked God//
}
handler.help = ['lov2', 'cachuda', 'negra', 'adoptado', 'sintetas', 'sinpoto', 'sinpito', 'feo', 'cachudo', 'fea', 'negro', 'adoptada'].map(v => v + ' @tag | nombre')
handler.tags = ['fun']
handler.command = /^love2|cachuda|adoptado|adoptada|sintetas|sinpoto|sinpito|feo|fea|cachudo|negro|negra/i
handler.exp = 100
export default handler
