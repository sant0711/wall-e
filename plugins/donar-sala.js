let toM = a => '@' + a.split('@')[0]
function handler(m, { groupMetadata }) {
let ps = groupMetadata.participants.map(v => v.id)
let a = ps.getRandom()
let b
do b = ps.getRandom()
while (b === a)
m.reply(`*${toM(a)},* _le tocó donar una sala estás de mala suerte hoy bájate con todo lo que tengas_😾💥
*_𝙏𝙃𝙀 𝙅𝙊𝘾𝙆𝙀𝙍 𝘽𝙊𝙏 - MD_* 🌟`, null, {
mentions: [a, b]
})}
handler.help = ['donarsala']
handler.tags = ['group']
handler.command = ['donarsala']
handler.group = true
handler.admin = true
export default handler
