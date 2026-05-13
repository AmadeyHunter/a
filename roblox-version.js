// 1. Simulating the exact API response data you provided
const mockApiResponse = {
    "version": "0.721.0.7211107",
    "clientVersionUpload": "version-ec412128eba3476e",
    "bootstrapperVersion": "1, 6, 0, 7211107"
};

// 2. Extract only the target string piece
const targetVersion = mockApiResponse.clientVersionUpload;

// 3. Print the result directly to your HTML element
document.getElementById('roblox-version').textContent = targetVersion;
