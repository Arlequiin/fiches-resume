{ pkgs }: {
	deps = [
		pkgs.spidermonkey_68
  pkgs.gnumake42
  pkgs.nodejs-16_x
        pkgs.nodePackages.typescript-language-server
        pkgs.yarn
        pkgs.replitPackages.jest
	];
}