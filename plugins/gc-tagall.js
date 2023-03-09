let handler = async(m, { isOwner, isAdmin, conn, text, participants, args, command }) => {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}
let pesan = args.join` `
let oi = `*ESTE ES UN SUB BOT, LA REVENTA ESTA PROHIBIDA, EVITAR SU COMPRA, PARA ADQUIRIR EL BOT HABLAR A LOS SIGUIENTES NUMEROS:*
Wa.me/+51955095498
Wa.me/+51933348947
*Wa.me/+56954390663* ${pesan}`
let teks = `*ETIQUETA GENERAL DE DEVI BOT*\n\n❏ ${oi}\n\n❏ *𝙴𝚃𝙸𝚀𝚄𝙴𝚃𝙰𝚂:*\n`
for (let mem of participants) {
teks += `🐼 @${mem.id.split('@')[0]}\n`}
teks += `*└*@pachon_ff\n\n*<3*`
conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, )
}
handler.help = ['tagall <mesaje>','invocar <mesaje>']
handler.tags = ['group']
handler.command = /^(tagall|invocar|invocacion|todos|invocación)$/i
handler.admin = true
handler.group = true
export default handler
