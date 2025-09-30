import { CMSManager } from './modules/cms-manager.js';
import { SectionManager } from './modules/section-manager.js';
import { NavigationManager } from './modules/navigation-manager.js';
import { FileManager } from './modules/file-manager.js';
import { MapManager } from './modules/map-manager.js';
import { showToast } from './modules/utils.js';

class LandingPageApp {
    constructor() {
        this.modules = {};
        this.init();
    }

    init() {
        // Initialize all modules
        this.modules.cms = new CMSManager();
        this.modules.sections = new SectionManager();
        this.modules.navigation = new NavigationManager();
        this.modules.files = new FileManager();
        this.modules.maps = new MapManager();

        // Load saved data
        this.loadSavedData();
        
        // Initialize event listeners
        this.initEventListeners();
        
        showToast('صفحه با موفقیت بارگذاری شد');
    }

    initEventListeners() {
        // Add section button
        document.getElementById('addSectionMain').addEventListener('click', () => {
            this.modules.sections.openSectionModal();
        });
    }

    loadSavedData() {
        // Implementation for loading saved data
    }
}

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.landingPageApp = new LandingPageApp();
});