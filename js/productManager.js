
let cameraId = localStorage.key['']
     function deleteCamera (cameraId) {
        localStorage.removeItem(cameraId);
        window.location.reload();
    };
