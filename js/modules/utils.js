export function showToast(message) {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.classList.add('show');
    
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

export function copyToClipboard(element) {
    // Implementation for clipboard copy
}

export function getSocialPlatformName(platform) {
    // Implementation for getting social platform names
}

export function initSortable() {
    // Implementation for drag and drop
}