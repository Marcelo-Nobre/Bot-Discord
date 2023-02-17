const { SlashCommandBuilder, ActionRowBuilder, StringSelectMenuBuilder, Component } = require("discord.js")

const row = new ActionRowBuilder()
    .addComponents(
        new StringSelectMenuBuilder()
            .setCustomId("select")
            .setPlaceholder("Nenhuma playlist selecionada")
            .addOptions({
                label: "SeuOsmar",
                description: "Veja a playlist do seu Osmar",
                value: "SeuOsmar"
                },
               
            )
    )

module.exports = {
    data: new SlashCommandBuilder()
        .setName("playlist")
        .setDescription("Acesse a playlist que quiser"),

    async execute(interaction) {
        await interaction.reply({content: "Selecione uma das playlists abaixo:", components: [row]})
    }
}