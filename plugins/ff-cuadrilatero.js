const handler = async (m, { conn, args }) => {
    // Verificar si se proporcionaron los argumentos necesarios
    if (args.length < 2) {
        conn.reply(m.chat, '_Debes proporcionar la hora (HH:MM) y el color de ropa._', m);
        return;
    }

    // Validar el formato de la hora
    const horaRegex = /^([01]\d|2[0-3]):?([0-5]\d)$/;
    if (!horaRegex.test(args[0])) {
        conn.reply(m.chat, '_Formato de hora incorrecto. Debe ser HH:MM en formato de 24 horas._', m);
        return;
    }

    const horaUsuario = args[0]; // Hora proporcionada por el usuario
    const colorRopa = args.slice(1).join(' '); // Color de ropa proporcionado por el usuario

    // Calcular la hora adelantada
    const horaUsuarioSplit = horaUsuario.split(':');
    let horaAdelantada = '';
    if (horaUsuarioSplit.length === 2) {
        const horaNumerica = parseInt(horaUsuarioSplit[0], 10);
        const minutoNumerico = parseInt(horaUsuarioSplit[1], 10);
        const horaAdelantadaNumerica = horaNumerica + 1; // Adelantar 1 hora
        horaAdelantada = `${horaAdelantadaNumerica.toString().padStart(2, '0')}:${minutoNumerico.toString().padStart(2, '0')}`;
    }

    const message = `
    _*🔥🐺 CUADRILÁTERO LEGEND 🐺🔥*_
    
    𝐇𝐎𝐑𝐀𝐑𝐈𝐎
    🇲🇽 𝐌𝐄𝐗 : ${horaUsuario}
    🇨🇴 𝐂𝐎𝐋 : ${horaAdelantada}
    𝐂𝐎𝐋𝐎𝐑 𝐃𝐄 𝐑𝐎𝐏𝐀: ${colorRopa}

👥 ESCUADRAS

🔹 ESCUADRA 1 
   👑 
   🥷🏻 
   🥷🏻 
   🥷🏻

🔸 ESCUADRA 2
   👑 
   🥷🏻 
   🥷🏻 
   🥷🏻 

🔹 ESCUADRA 3
   👑 
   🥷🏻
   🥷🏻 
   🥷🏻 

🔆 RESERVAS
   🥷🏻 
   🥷🏻

𝐖𝐀𝐋𝐋 - 𝐄, el mejor bot de todos!!!
`.trim();
    
    conn.sendMessage(m.chat, {text: message}, {quoted: m});
};
handler.help = ['cuadrilatero']
handler.tags = ['freefire']
handler.command = /^(cuadri|cuadrilatero)$/i;
export default handler;
