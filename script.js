const videoElement = document.getElementById('video');
const button = document.getElementById('button');

// Prompt to select a media stream, pass to video element, then play

async function selectMediaStream (){
    try{
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject= mediaStream;
        videoElement.onloadedmetadata = ()=> {
            videoElement.play();
        }
    }catch(error){
        console.log('error', error)
    }
}

button.addEventListener('click', async ()=> {
    //disbable the button
    button.disable=true;
    //start Picture in pucture;
    await videoElement.requestPictureInPicture();
    // reset the button
    button.disable=false;
});
selectMediaStream();