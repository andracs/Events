// Øvelser med JavaScript events, objects og DOM

console.log("Script running...");

/* Opsamling af hvad I lærte */  

// let const var
// comparaison operators == === != !== > < >= <=
// null undefined NaN
// objekter 
// loops og if sætninger
// arrays
// functions

/* Gennemgang af Visual Studio Code */  
// Installer Copilot evt LiveServer 
let orale = `hej shabs 😎 jeg har stjålet det her. mine now. brand varm
skud ud til daniel
skud ud til bekir
skud ud til andrás højt elskede bror, jeg hedder Marcus😎😎😎😎😎`

`⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡠⠖⠋⠉⠉⠳⡴⠒⠒⠒⠲⠤⢤⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⠊⠀⠀⡴⠚⡩⠟⠓⠒⡖⠲⡄⠀⠀⠈⡆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⡞⠁⢠⠒⠾⢥⣀⣇⣚⣹⡤⡟⠀⡇⢠⠀⢠⠇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣄⣀⠀⡇⠀⠀⠀⠀⠀⢀⡜⠁⣸⢠⠎⣰⣃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠸⡍⠀⠉⠉⠛⠦⣄⠀⢀⡴⣫⠴⠋⢹⡏⡼⠁⠈⠙⢦⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⡽⣄⠀⠀⠀⠀⠈⠙⠻⣎⡁⠀⠀⣸⡾⠀⠀⠀⠀⣀⡹⠂⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⡞⠁⠀⠈⢣⡀⠀⠀⠀⠀⠀⠀⠉⠓⠶⢟⠀⢀⡤⠖⠋⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠙⠒⠦⡀⠙⠦⣀⠀⠀⠀⠀⠀⠀⢀⣴⡷⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⢦⣀⠈⠓⣦⣤⣤⣤⢶⡟⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢤⣤⣤⡤⠤⠤⠤⠤⣌⡉⠉⠁⠀⠀⢸⢸⠁⡠⠖⠒⠒⢒⣒⡶⣶⠤⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠲⣍⠓⠦⣄⠀⠀⠙⣆⠀⠀⠀⡞⡼⡼⢀⣠⠴⠊⢉⡤⠚⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠳⣄⠈⠙⢦⡀⢸⡀⠀⢰⢣⡧⠷⣯⣤⠤⠚⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠑⣲⠤⠬⠿⠧⣠⢏⡞⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⡴⠚⠉⠉⢉⣳⣄⣠⠏⡞⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⣴⣟⣒⣋⣉⣉⡭⠟⢡⠏⡼⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠀⠀⠀⠀⠀⠀⠀⢀⠏⣸⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡞⢠⠇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⠓⠚⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀

⣿⣿⣿⣿⠏⠘⠛⠂⠄⠄⠉⠙⢻⡟⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡟⠄⠄⣿
⣿⣿⡟⣩⣄⠄⠄⠛⠷⠄⠄⢀⣾⠗⠄⠄⠄⠄⠄⢀⣄⣙⠻⣿⡿⠿⠃⢀⣼⣿
⣿⡿⢡⣿⣿⣿⣷⡴⢄⣤⣶⣿⣿⣄⠄⠄⠄⢠⣶⣶⡄⠉⠉⠙⢿⡆⢀⣾⣿⣿
⣿⠃⠸⠿⠿⠛⠛⠶⣿⣿⣿⣿⣏⠻⣶⣼⣶⣦⣤⣄⡀⢀⣀⡺⠋⣴⣿⣿⣿⣿
⡟⠄⠄⠄⠤⠾⠄⠄⣈⣛⠋⠉⠹⠆⣹⣿⣿⣿⣿⣿⣿⣿⠿⠁⢸⡟⢛⣿⣿⣿
⣇⠄⠄⠄⠄⠶⢤⣴⣿⣉⡁⠄⢤⣾⣿⣿⢿⣿⡿⠟⠛⠄⠄⣴⣿⣿⣿⣿⣿⣿
⣿⠄⠄⠙⠿⣿⣶⣬⣍⣉⠛⠲⠄⠈⠉⠁⠈⠁⠄⠄⠄⢀⣰⣿⣿⣿⣿⣿⣿⣿
⣿⡆⠄⠄⠄⠄⠈⠉⠉⠉⠛⠄⠄⠄⠄⠄⠄⠄⠄⣀⣴⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣦⡀⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⣠⣴⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣷⣤⣤⣀⣀⣀⣀⣠⣤⣴⣶⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⠿⠿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠿⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⡏⠀⠰⠛⠻⢿⣿⠿⠿⠟⡿⠿⢿⣿⠿⠿⣿⠃⠀⠟⠛⠿⣿⣿⣿⣿⣿⣿⣿
⣿⠀⠀⣴⡄⠀⠘⡇⠀⣤⣤⡇⠀⣼⣿⠀⢠⡏⠀⢠⣦⠀⠀⣽⣿⣿⣿⣿⣿⣿
⡿⠀⠀⠛⠃⠀⡼⠀⠀⣿⣿⠀⠀⠛⠃⠀⢸⠁⠀⣼⡏⠀⢠⡟⠉⢻⣿⣿⣿⣿
⣷⣶⣶⣶⣶⣾⣷⣶⣾⣿⣿⣷⣶⣶⣶⣶⣿⣶⣶⣿⣷⣶⣾⣷⣶⣾⣿⣿⣿⣿

⢕⢕⢕⢕⢕⢕⢕⢕⢕⢕⢕⢕⢕⢕⢕⢕⢕⢕⢕⢕⢕⢕⠕⠕⠕⠕⢕⢕
⢕⢕⢕⢕⢕⠕⠕⢕⢕⢕⢕⢕⢕⢕⢕⢕⢕⠕⠁⣁⣠⣤⣤⣤⣶⣦⡄⢑
⢕⢕⢕⠅⢁⣴⣤⠀⣀⠁⠑⠑⠁⢁⣀⣀⣀⣀⣘⢻⣿⣿⣿⣿⣿⡟⢁⢔
⢕⢕⠕⠀⣿⡁⠄⠀⣹⣿⣿⣿⡿⢋⣥⠤⠙⣿⣿⣿⣿⣿⡿⠿⡟⠀⢔⢕
⢕⠕⠁⣴⣦⣤⣴⣾⣿⣿⣿⣿⣇⠻⣇⠐⠀⣼⣿⣿⣿⣿⣿⣄⠀⠐⢕⢕
⠅⢀⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣶⣶⣿⣿⣿⣿⣿⣿⣿⣿⣷⡄⠐⢕
⠀⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡄⠐
⢄⠈⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡆
⢕⢔⠀⠈⠛⠿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⢕⢕⢄⠈⠳⣶⣶⣶⣤⣤⣤⣤⣭⡍⢭⡍⢨⣯⡛⢿⣿⣿⣿⣿⣿⣿⣿⣿
⢕⢕⢕⢕⠀⠈⠛⠿⢿⣿⣿⣿⣿⣿⣦⣤⣿⣿⣿⣦⣈⠛⢿⢿⣿⣿⣿⣿
⢕⢕⢕⠁⢠⣾⣶⣾⣭⣖⣛⣿⠿⣿⣿⣿⣿⣿⣿⣿⣿⣷⡆⢸⣿⣿⣿⡟
⢕⢕⠅⢀⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠟⠈⢿⣿⣿⡇
⢕⠕⠀⠼⠟⢉⣉⡙⠻⠿⢿⣿⣿⣿⣿⣿⡿⢿⣛⣭⡴⠶⠶⠂⠀⠿⠿⠇


⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣀⣤⣤⣤⣤⣄⣀⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣤⣶⡿⠛⠋⠉⠉⠉⠉⠉⡿⠛⠻⠷⣶⣤⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⣾⠟⠉⠀⠙⣦⣀⣀⣀⣠⡤⠴⡿⣄⡀⠀⠀⠉⠻⢷⣤⡀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣰⡟⠁⠀⠀⠀⣰⠋⢧⠀⠀⠀⠀⠀⡇⠀⠉⠙⠓⠒⡶⢯⣙⣿⣆⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣼⡟⠀⠀⠀⢀⠞⠁⠀⠈⣳⡤⠤⠴⠚⣟⠛⠒⠒⠒⣺⠳⢤⣀⣉⣻⣷⡀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣸⡿⠶⠶⣤⣾⡁⠀⠀⢀⡜⠉⣧⣠⣤⣴⣾⣶⠶⠶⠶⠷⣶⣶⣶⣬⣭⣙⣷⡀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⣿⠁⠀⠀⣿⠀⠙⢲⣞⠁⣠⡾⠟⠉⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠙⠻⢷⣄⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⡏⠀⠀⠀⡇⠀⠀⢸⠏⣿⡏⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙⢷⡄⠀
⠀⠀⠀⢀⣠⣴⣶⣶⣦⣾⠃⠀⠀⢠⡇⠀⠀⣸⠀⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⣿⡄
⠀⠀⣠⡿⠿⡄⠀⠀⠈⣿⡀⠀⠀⡼⠀⠀⣴⣃⣤⣿⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⡇
⠀⣰⡿⠁⠀⠹⡄⠀⠀⣿⠿⣶⣴⡷⠒⠋⠻⡄⠀⢹⣧⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣿⠃
⢀⣿⠁⠀⠀⠀⢹⣀⣴⡏⠀⠀⠙⢿⣦⠀⠀⢹⡄⠀⠻⣧⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣠⣿⠋⠀
⢸⡿⢧⠀⠀⢀⡼⠯⣼⡇⠀⠀⠀⠀⠙⣷⡄⠀⣇⡤⠞⠉⠻⢷⣤⣄⣀⣀⠀⠀⠀⠀⠀⠀⣀⣀⣀⣤⣶⣿⣿⣿⠀⠀
⣿⡇⠈⢧⣠⠎⠀⠀⢸⡇⠀⠀⠀⠀⠀⠘⣿⡞⠛⠢⣄⠀⣠⠏⠈⠉⡿⠛⠛⠛⢻⠛⠛⠛⠛⢿⠉⠁⣴⠟⠁⣿⠀⠀
⣿⠃⠀⡼⠧⣄⠀⠀⢸⡇⠀⠀⠀⠀⠀⠀⠘⣷⡀⠀⠘⣶⣁⡀⠀⡼⠁⢀⡀⠀⠘⡇⣀⣠⣤⣬⣷⣾⠏⠀⠀⣿⠀⠀
⣿⣀⡞⠁⠀⠈⢣⡀⢸⡇⠀⠀⠀⠀⠀⠀⠀⢹⣇⠀⡼⠁⠀⠉⣹⠛⠉⠉⡉⠉⢙⣏⠁⠀⠀⠀⣼⡏⠀⠀⠀⣿⠀⠀
⣿⡿⣄⠀⠀⠀⠀⢳⣼⡇⠀⠀⠀⠀⠀⠀⠀⠈⣿⡾⠁⠀⠀⢀⡇⢠⠂⣜⣠⣤⠸⡟⢣⠀⠀⢰⡿⠀⠀⠀⠀⣿⠀⠀
⣿⡇⠈⠳⡄⠀⠀⣨⢿⡇⠀⠀⠀⠀⠀⠀⠀⠀⣿⡗⠒⠲⢤⣸⠀⣸⣄⣿⣿⣿⣷⣿⣞⣠⣤⣿⠇⠀⠀⠀⠀⣿⠀⠀
⢸⣇⠀⠀⢹⡀⡰⠃⢸⡇⠀⠀⠀⠀⠀⠀⠀⠀⢸⡇⠀⠀⠀⣹⢉⡽⣿⢿⣿⣿⣿⣿⣅⠀⠀⣿⠀⠀⠀⠀⢀⣿⠀⠀
⠘⣿⡀⠀⠈⡿⠁⠀⢸⣷⣦⣤⣤⣄⣀⡀⠀⠀⢸⡇⠀⠀⠀⡟⠘⡅⢇⢸⣿⣿⠇⡇⡸⠀⠀⣿⠀⢀⣀⣠⣼⣿⠀⠀
⠀⢻⣇⠀⣰⠛⠒⠦⣼⡇⠀⠀⠉⠉⠙⢻⣷⣦⣼⡏⠉⠓⠦⣿⠤⠵⠾⠾⠿⢿⣸⣯⠧⠖⠚⣿⡾⠟⠋⠉⣹⡇⠀⠀
⠀⠈⢿⣶⠇⠀⠀⠀⢸⣿⣶⣤⣤⣤⣀⣼⣀⣈⣙⣃⡀⠀⠀⢹⡀⠀⠀⢀⣀⣀⣸⣁⣀⣀⣤⣤⣤⣶⠶⠿⣿⡇⠀⠀
⠀⠀⠈⠻⣷⣄⠀⠀⢘⣧⠀⠀⠉⠉⠉⠙⠛⠛⠛⠛⠛⠛⠛⠛⠛⠛⠛⠛⠛⠛⠛⠛⢉⡉⠉⠉⠀⠀⠀⢀⣿⠁⠀⠀
⠀⠀⠀⠀⠈⠙⠛⠿⠻⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⡷⠶⠶⠶⢶⡶⠿⠿⠿⠛⠋⠀⠀⢀⣀⣤⣾⡿⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⣤⣀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣸⡇⠀⠀⠀⢸⣧⣤⣤⣤⣶⣶⠶⠿⠛⠋⠁⣼⡇⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⢿⡍⠙⠛⢿⠿⠷⠶⠶⠾⠿⠿⠟⢻⡇⠀⠀⠀⢸⡏⠉⠁⠀⣀⣀⣀⣀⣄⣀⣀⣿⠁⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⡟⠲⢦⣼⣀⣀⣀⣤⣤⣀⣀⡀⢸⡇⠀⠀⠀⢸⣷⠖⠚⠉⠉⠀⠀⠀⠀⠀⣸⡏⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠸⣿⠀⠀⡏⠁⠀⠀⠀⠀⠀⠈⠉⣿⠇⠀⠀⠀⠀⢿⣆⠀⠀⠀⠀⠀⠀⠀⣠⡿⠁⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠻⣧⣀⡇⠀⠀⠀⠀⠀⢀⣠⣾⠟⠀⠀⠀⠀⠀⠈⠻⢷⣶⣶⣶⣶⡶⠿⠛⠁⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠛⠛⠿⠿⠿⠿⠿⠛⠋⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀

⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⢀⠄⡀⠄⡀⢀⠄⡀⡀⠠⢀⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄
⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⡀⠠⢀⠄⡅⢔⠰⡨⢢⢡⢑⠔⠅⠕⠄⠅⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄
⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⡀⠅⢔⠨⢐⠅⡌⢆⢣⠪⡪⡘⡌⡮⡱⡡⣊⢌⢀⢀⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄
⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠠⡐⢄⠕⡡⡘⢔⢱⢨⢪⢪⢪⢪⡺⣪⢞⢮⢫⢮⢺⢔⢆⡢⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄
⠄⠄⠄⠄⠄⢀⠐⠈⠄⡠⡊⢌⠢⡑⡌⡆⡇⡇⡇⡇⣇⢗⣝⢮⡺⣪⡳⣹⡪⣞⢵⢝⡵⡝⣕⠡⢀⢂⠄⠄⠄⠄⠄⠄⠄⠄
⠄⠄⠄⠄⢠⢊⢂⠁⡔⡌⡢⢑⠌⡢⡱⡸⡸⡸⡪⡺⡸⣕⢵⡳⣝⢮⡺⣪⢞⣵⣫⡳⣕⢯⡺⡬⠄⠕⡕⡄⠄⠄⠄⠄⠄⠄
⠄⠄⠄⠄⡇⡇⡂⢢⢣⢣⠨⡂⡊⢔⢕⢱⡱⡝⣜⢝⡺⣜⡵⣝⢮⡳⡽⣵⣻⡺⣼⡺⡵⣳⢝⡮⡃⡕⡺⢄⠄⠄⠄⠄⠄⠄
⠄⠄⠄⢸⡱⡱⡨⢪⢪⢢⠡⢂⢊⠢⡱⡱⡱⡝⡮⡳⣝⢞⢮⢗⡯⣯⢯⣗⡯⣟⣮⢯⣟⢮⡳⣝⢇⢇⢎⢵⡀⠄⠄⠄⠄⠄
⠄⠄⠄⣕⢵⢣⢣⢑⢅⢆⢃⠢⠡⡡⡱⡱⡹⡪⡯⣺⢕⡯⣫⢯⢾⢽⢽⣺⢯⣗⡯⣗⣗⢗⣝⢮⡫⣏⢮⢒⢅⠄⠄⠄⠄⠄
⠄⠄⢀⠮⡪⢪⠪⠢⡃⡪⡂⠅⢕⠰⢱⢸⢸⡱⣝⢮⡳⡽⣪⢏⡯⡯⣟⡾⣽⣺⢽⣳⡳⣝⢮⡳⣫⣳⢳⡱⡱⠄⠄⠄⠄⠄
⠄⠄⢀⡃⡫⢔⢨⢕⢕⢔⢌⢌⠢⡑⡱⡘⢜⢜⢮⡳⣝⣞⢵⣫⢿⢽⣺⡽⡾⣾⢽⣳⢯⢮⡳⣝⣕⢗⢵⡑⡕⡀⠄⠄⠄⠄
⠄⠄⠐⠢⡱⡐⢕⢵⣑⡑⢕⢐⠕⠸⠰⡑⠕⢕⢕⠽⡕⣏⢗⢽⢝⢽⠺⠽⠽⢽⢻⢽⢽⢵⢽⡸⣪⢳⢱⢱⡱⡽⡡⡀⠄⠄
⠄⠄⠨⠈⢆⢊⢎⢖⢂⠃⠡⠐⠈⠈⠄⠄⠄⠄⠄⢑⢹⢘⣜⢕⠑⡈⠄⡈⣈⣐⠨⠘⡜⢕⡳⣝⢮⡳⡱⡱⡵⡯⡪⠂⠄⠄
⠄⠄⠄⠅⢂⠑⡕⡕⠄⡢⢀⠄⠠⠄⠁⠁⡌⠠⢠⠄⠸⣸⣺⡪⣐⠅⢢⢈⠄⢬⢍⣆⢧⣳⡽⡮⣺⡪⡺⣘⢼⣝⠆⠄⠄⠄
⠄⠄⠄⠨⡢⡢⡣⡳⢑⢰⢐⠠⡊⡪⣢⡣⡪⡰⠑⡀⠨⣪⢷⣝⡮⡫⡪⣪⢾⢝⣯⢾⣝⣗⡯⣟⢮⡪⡯⡷⣗⡯⠄⠄⠄⠄
⠄⠄⠄⠄⢕⠄⡇⡣⡑⠔⢅⠇⡇⡏⡖⡕⡕⣌⢂⠂⠌⢮⢷⡳⡯⡯⡾⡵⣫⢯⢞⣗⡷⡯⣯⡳⣱⢱⢝⡽⣺⠁⠄⠄⠄⠄
⠄⠄⠄⠄⠡⡡⢱⢐⠨⠨⠐⡡⢃⢇⢇⡏⡞⡔⡐⠠⢑⢽⢽⢽⢽⢽⢽⣝⢗⡯⣟⢾⢽⢝⡞⣜⢜⢜⣽⣺⠎⠄⠄⠄⠄⠄
⠄⠄⠄⠄⠄⠊⠃⠂⡐⠄⠅⡐⡈⡢⡃⢇⠕⡢⠄⠨⢘⢮⢯⢯⣳⡫⡗⣗⢽⢝⡮⡯⡮⡣⡏⣎⢎⠞⠺⠊⠄⠄⠄⠄⠄⠄
⠄⠄⠄⠄⠄⠄⠄⠄⠂⡁⢂⠐⡈⡢⢑⠅⡕⡐⠈⠨⡨⢯⣻⢽⣺⢺⡺⡪⣏⢷⢽⢕⣯⡫⣞⢜⢜⠄⠄⠄⠄⠄⠄⠄⠄⠄
⠄⠄⠄⠄⠄⠄⠄⠄⡁⠄⠄⠂⡂⠌⠄⢕⢐⠌⢄⠄⠨⠨⢘⢥⢅⡵⣝⣝⢮⡳⡽⣝⡮⣺⢪⢎⣗⠄⠄⠄⠄⠄⠄⠄⠄⠄
⠄⠄⠄⠄⠄⠄⠄⠄⠄⢂⢀⠡⠄⠌⠌⢂⢂⠪⠐⡌⢰⢰⢘⢼⢝⣞⢞⣞⡵⡯⣞⢵⣫⢮⡳⡣⡳⠄⠄⠄⠄⠄⠄⠄⠄⠄
⠄⠄⠄⠄⠄⠄⠄⠄⠈⡀⠐⠄⠊⠄⠨⠐⠠⠈⠌⠘⠜⠵⡢⢳⢹⢜⢕⠕⠱⡹⡪⡳⣕⣳⢹⡸⠅⠄⠄⠄⠄⠄⠄⠄⠄⠄
⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠈⢄⠡⠁⠠⠄⠄⡀⠄⠐⠔⠔⠔⡢⠦⣒⢎⣎⢦⢢⢩⡫⣎⢮⢣⠃⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄
⠄⠄⠄⠄⠄⠄⠄⠄⢰⣇⠄⠐⠠⠄⠁⠄⠡⢀⢂⢅⢔⢄⣆⣆⢕⢵⡹⣪⡳⣕⢵⢱⢕⢇⡇⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄
⠄⠄⠄⠄⠄⠄⠄⠄⠱⡿⣵⣀⠄⠄⠄⠈⠨⠨⡂⢇⢎⢕⢎⢞⡽⡵⣝⢮⢺⢸⠸⡘⣜⢼⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄
⠄⠄⠄⠄⠄⠄⠄⠄⠄⢹⣺⣳⣧⣄⡀⠄⠄⡀⠂⠌⡂⠕⢌⠊⢎⠪⠪⠪⡊⡆⣕⣕⢧⣓⣧⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄
⠄⠄⠄⠄⠄⠄⠄⠄⠄⠈⢪⢞⣾⡽⣷⣮⡄⠐⠄⡂⠌⢌⠢⢑⢐⢄⢅⢇⢇⣗⣕⢗⡵⣽⣿⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄
⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠙⡾⣽⣯⣷⣿⡿⣮⣰⢱⡱⣜⢔⡑⡜⣜⢮⣣⡳⣪⢷⣽⣿⣿⡀⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄
⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠘⡷⣿⣽⣿⣿⣿⣿⣿⣾⣮⣗⣽⢵⢕⣕⢮⡺⢝⣵⣿⣿⣿⣷⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄
⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠘⣯⡿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣵⣏⣾⣿⣿⣿⣿⣿⣿⣇⠄⠄⠄⠄⠄⠄⠄⠄⠄
⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠻⣟⣿⣿⣿⣿⣿⣿⣿⣿⣿⠏⠉⠄⠄⠄⠉⠻⢿⣿⣿⣿⣿⡀⠄⠄⠄⠄⠄⠄⠄⠄
⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⢻⣿⣿⣿⣿⣿⣿⣿⡟⠁⠄⠄⠁⠠⠄⠄⠄⠈⠽⣿⣿⣿⣷⠄⠄⠄⠄⠄⠄⠄⠄
⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠈⢿⣿⣿⣿⣿⣿⡵⣄⠄⠄⠄⠄⠁⠈⠄⠄⢸⣹⡪⣿⣿⣿⡂⠄⠄⠄⠄⠄⠄⠄
⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠈⢿⣿⣿⣻⣿⣿⣯⣿⣢⣄⠄⠄⠄⠑⠠⢸⣿⣿⣮⢞⣿⣧⠄⠄⠄⠄⠄⠄⠄

Writing's not easy. That's why Grammarly can help. This sentence is grammatically correct, but it's wordy, and hard to read. It undermines the writer's message and the word choice is bland. Grammarly's cutting edge technology helps you craft compelling, understandable writing that makes an impact on your reader. Much better. Are you ready to give it a try? Installation is simple and free. Visit Grammarly.com today!
Writing's not easy. That's why Grammarly can help. This sentence is grammatically correct, but it's wordy, and hard to read. It undermines the writer's message and the word choice is bland. Grammarly's cutting edge technology helps you craft compelling, understandable writing that makes an impact on your reader. Much better. Are you ready to give it a try? Installation is simple and free. Visit Grammarly.com today!
Writing's not easy. That's why Grammarly can help. This sentence is grammatically correct, but it's wordy, and hard to read. It undermines the writer's message and the word choice is bland. Grammarly's cutting edge technology helps you craft compelling, understandable writing that makes an impact on your reader. Much better. Are you ready to give it a try? Installation is simple and free. Visit Grammarly.com today!
Writing's not easy. That's why Grammarly can help. This sentence is grammatically correct, but it's wordy, and hard to read. It undermines the writer's message and the word choice is bland. Grammarly's cutting edge technology helps you craft compelling, understandable writing that makes an impact on your reader. Much better. Are you ready to give it a try? Installation is simple and free. Visit Grammarly.com today!
Hey, quandale Pringle here,

My boss caught me watching a hottub streamer during work and he squeezed my hog so hard and wouldn't even stop after I banned him.

My brother Cornelius Bartholomew Anderson ringle got caught in an alberian twitch prime and bits scam and got sent to the gulag, but we've snuck him a Nokia 3310 in his ass with a spoon that he'll be using to plan a breakout with my cousin longsdale dimmsdimone slingle.

Why is six afraid of seven?

Six hasn't been the same since he left Vietnam. He can seldom close his eyes without opening them again at fear of Charlies lurking in the jungle trees. 
Not that you could ever see the bastards, mind you. They were swift, and they knew their way around the jungle like nothing else.
He remembers the looks on the boys' faces as he walked into that village and... oh, Jesus. The memories seldom left him, either. 
Sometimes he'd reminisce - even hear - Tex's southern drawl. He remembers the smell of Brooklyn's cigarettes like nothing else.
He always kept a pack of Lucky's with him. The boys are gone, now. He knows that; it's just that he forgets, sometimes. 
And, every now and then, the way that seven looks at him with avid concern in his eyes... it makes him think. Sets him on edge. 
Makes him feel like he's back there... in the jungle.

`


console.log(orale)


/* Events */  

/* Objects */  

/* DOM */






function smile() {
    let smiley = document.getElementById("smiley"); 
    smiley.appendChild(document.createTextNode("🎃"));
    smiley.style.fontSize = "100px";
    smiley.style.margin = 0;
}