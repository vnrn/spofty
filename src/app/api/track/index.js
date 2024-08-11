const { downloadTrack } = require("sanzy-spotifydl");

export async function Download(url) {
    try {
        const track = await downloadTrack(url);
        console.log(`running ${url}`);
        return track
    } catch (error) {
        console.error(error);  
    }
}