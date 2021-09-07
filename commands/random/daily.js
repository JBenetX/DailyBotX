const frases = require("../../resources/frasesDaily.json");

module.exports = {
    data: {
        name: 'daily',
        description: 'Selecciona a un usuario aleatorio del servidor y lo muestra junto a una frase.',
    },
    async execute(interaction) {
    
        const guild = interaction.guild;

        guild.members.fetch()
            .then((members) => {
                const totalOnline = members.filter((member) => !member.user?.bot && member.presence?.status != 'offline');
                const selectedMember = totalOnline.random();
                
                const selectedFrase = frases[Math.floor(Math.random() * frases.length)];

                interaction.reply(selectedFrase.replace("{0}", `${selectedMember}`));
            })
            .catch(console.error);;
    }
}