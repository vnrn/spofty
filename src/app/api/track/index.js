import {downloadTrack2} from "@nechlophomeriaa/spotifydl"

export async function Download(url) {
    try {
        const track = await downloadTrack2(url);
        console.log(`running ${url}`);
        return track
    } catch (error) {
        console.error(error);  
    }
}
