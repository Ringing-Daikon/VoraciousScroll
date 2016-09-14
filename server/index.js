const chalk = require('chalk'),
cy = chalk.yellow.bold,
cr = chalk.red.bold,
cc = chalk.cyan.bold,
cm = chalk.magenta.bold;
console.log(cr('                 ."-,.__' +
'\n                 `.     `.  ,' +
'\n              .--\'  .._,\'"-\' `.' +
'\n             .    .\'         `\'' +
'\n             `.   /          ,\\\'' +
'\n               `  \'--.   ,-"\'' +
'\n                `"`   |  \\' +
'\n                   -. \\, |' +
'\n                    `--Y.\'') + cy('      ___.' +
'\n                         ') + cr('\\') + cy('     L._, \\' +
'\n               _.,        ') + cr('`.') + cy('   <  <\\ |               _' +
'\n             ,\' \'           ') + cr('`,') + cy(' `.   | \'            ( `' +
'\n          ../, `.            ') + cr('`') + cy('  |    .\\`.           \\ \\_' +
'\n         ,\' ,..  .           _.,\'    ||\\l            )  \'".' +
'\n        , ,\'   \\           ,\'.-.`-._,\'  |           .  _._`.' +
'\n      ,\' /      \\ \\        `\' \' `--/   | \\          / /   ..\\' +
'\n    .\'  /        \\ .         |\\__ - _ ,\'` `        / /     `.`.' +
'\n    |  \'          ..         `-...-"  |  `-\'      / /        . `.       ' + cm('BE AWESOME.') +
'\n    | /           |L__           |    |          / /          `. `.     ' + cm('LIKE CHARIZARD.') +
'\n   , /            .   .          |    |         / /             ` `' +
'\n  / /          ,. ,`._ `-_       |    |  _   ,-\' /               ` \\' +
'\n / .           \\"`_/. `-_ \_,.  ,\'    +-\' `-\'  _,        ') + cr('..,-.') + cy('    \\`.    ' +  cc('BE CHARIZARD AWESOME.') +
'\n.  \'         .-f    ,\'   `    \'.       \\__.---\'     _   ') + cr('.\'   \'') + cy('     \\ \\' +
'\n\' /          `.\'    l     .\' /          \\..      ,_|/   ') + cr('`.  ,\'`') + cy('     L`' +
'\n|\'      _.-""` `.    \\ _,\'  `            \\ `.___`.\'"`-.  ') + cr(', |   |') + cy('    | \\' +
'\n||    ,\'      `. `.   \'       _,...._        `  |    `/ ') + cr('\'  |   \'') + cy('     .|' +
'\n||  ,\'          `. ;.,.---\' ,\'       `.   `.. `-\'  .-\' ') + cr('/_ .\'    ;') + cy('_   ||' +
'\n|| \'              V      / /           `   | `   ,\'   ') + cr(',\' \'.    !') + cy('  `. ||' +
'\n||/            _,-------7 \'              . |  `-\'    ') + cr('l         /') + cy('    `||' +
'\n. |          ,\' .-   ,\' ||               | .-.        ') + cr('`.      .\'') + cy('     ||' +
'\n `\'        ,\'    `".\'    |               |    `.        ') + cr('\'. -.\'') + cy('       `\'' +
'\n          /      ,\'      |               |,\'    \\-.._,.\'/\'' +
'\n          .     /        .               .       \\    .\'\'' +
'\n        .`.    |         `.             /         :_,\'.\'' +
'\n          \\ `...\\   _     ,\'-.        .\'         /_.-\'' +
'\n           `-.__ `,  `\'   .  _.>----\'\'.  _  __  /' +
'\n                .\'        /"\'          |  "\'   \'_' +
'\n               /_|.-\'\ ,".             \'.\'`__\'-( \\' +
'\n                 / ,"\'"\\,\'               `/  `-.|"'));


const port = 3000;
require('./server.js').listen(port, () =>
  console.log(chalk.green.bold(`\nSmartNews server listening on ${port}.`)));