// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile3 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile5 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile6 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile7 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile8 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile4 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level2":
            case "level2":return tiles.createTilemap(hex`2000080000000000000000000000000000000000000000000000000000000000000000000000000000000005000000000000000500000000000000000000000000000000000000000000030300000000000000000000000000000000000000000000000000000000000000000000000000000303030000000300000000000000000000000000000500000000000300000000000000000000000005000000000000000000000000030303000000000000000000000005000000000300000000000000000004050000000000000000000000000000000300000000000000000005000000010303020202020202020203030202020202020202020202020202020303030303`, img`
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . 2 2 . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . 2 2 2 . . . 2 . . . . . . . . . . . 
. . . . . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . 
. . . 2 2 2 . . . . . . . . . . . . . . . . 2 . . . . . . . . . 
. . . . . . . . . . . . . . . . . 2 . . . . . . . . . . . . . . 
2 2 . . . . . . . . 2 2 . . . . . . . . . . . . . . . 2 2 2 2 2 
`, [myTiles.transparency16,myTiles.tile3,myTiles.tile6,myTiles.tile2,myTiles.tile5,myTiles.tile8], TileScale.Sixteen);
            case "level1":
            case "level1":return tiles.createTilemap(hex`2000080000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000101000000000000000000000000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000010000000000000001000000000000000000010101000000000001010000000000000000000000010100000101010000000000000002000000000000000101010000000000000101010000000000000000000000040101010103030303030303030303030301010101030303030303030101010101`, img`
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . 2 2 . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . 2 . . . . . . . . 
. . . . . . . . . . . 2 . . . . . . . 2 . . . . . . . . . 2 2 2 
. . . . . 2 2 . . . . . . . . . . . 2 2 . . 2 2 2 . . . . . . . 
. . . . . . . . 2 2 2 . . . . . . 2 2 2 . . . . . . . . . . . . 
2 2 2 2 . . . . . . . . . . . . 2 2 2 2 . . . . . . . 2 2 2 2 2 
`, [myTiles.transparency16,myTiles.tile2,myTiles.tile5,myTiles.tile6,myTiles.tile7], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "myTile":
            case "tile1":return tile1;
            case "myTile1":
            case "tile3":return tile3;
            case "myTile3":
            case "tile5":return tile5;
            case "myTile4":
            case "tile6":return tile6;
            case "myTile0":
            case "tile2":return tile2;
            case "myTile5":
            case "tile7":return tile7;
            case "myTile6":
            case "tile8":return tile8;
            case "myTile2":
            case "tile4":return tile4;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
