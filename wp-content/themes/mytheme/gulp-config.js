/**
 *
 *  ██████╗ ██╗   ██╗██╗     ██████╗      ██████╗ ██████╗ ███╗   ██╗███████╗██╗ ██████╗
 * ██╔════╝ ██║   ██║██║     ██╔══██╗    ██╔════╝██╔═══██╗████╗  ██║██╔════╝██║██╔════╝
 * ██║  ███╗██║   ██║██║     ██████╔╝    ██║     ██║   ██║██╔██╗ ██║█████╗  ██║██║  ███╗
 * ██║   ██║██║   ██║██║     ██╔═══╝     ██║     ██║   ██║██║╚██╗██║██╔══╝  ██║██║   ██║
 * ╚██████╔╝╚██████╔╝███████╗██║         ╚██████╗╚██████╔╝██║ ╚████║██║     ██║╚██████╔╝
 *  ╚═════╝  ╚═════╝ ╚══════╝╚═╝          ╚═════╝ ╚═════╝ ╚═╝  ╚═══╝╚═╝     ╚═╝ ╚═════╝
 *
 * This file contains:
 * * Settings for gulp.
*/

//add the proxy if you're using a server as for example WAMP
module.exports.config = {
	"proxy": 			"mytheme.test",
	"port": 			8080,
	"assetsUri": 		"assets", //path to the assets folder
	"gutenBlocksName":	"gutenblocks" //the name of the Gutenberg blocks plugin you use
}
