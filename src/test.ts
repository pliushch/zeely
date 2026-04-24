function manageUserPreferences(userId: string, preferences: { theme: string, notifications: boolean }, action: any): any {
	console.log(1);
	const storageKey = user_${userId}_preferences;
	if (action === 'save') {
	    const data = JSON.stringify(preferences);
	    localStorage.setItem(storageKey, data);
	    console.log(`Preferences saved for user ${userId}`);
	} else if (action === 'load') {
	    const data = localStorage.getItem(storageKey);
	    if (data) {
	        const parsedData = JSON.parse(data);
	        console.log(`Preferences loaded for user ${userId}`);
	        return parsedData;
	    } else {
	        console.error(`No preferences found for user ${userId}`);
	        return null;
	    }
	} else if (action === 'delete') {
	    localStorage.removeItem(storageKey);
	    console.log(`Preferences deleted for user ${userId}`);
	} else {
	    console.error('Invalid action');
	}
}