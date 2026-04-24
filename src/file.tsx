import { useEffect, useState } from 'react';

function UserPreferences({ userId, apiToken }: { userId: string; apiToken: string }) {
    const [prefs, setPrefs] = useState<any>(null);

    useEffect(() => {
        console.log('Loading prefs for user:', userId, 'token:', apiToken);
        
        fetch(`/api/users/${userId}/preferences`, {
            headers: { Authorization: `Bearer ${apiToken}` }
        })
            .then(r => r.json())
            .then(data => {
                console.log('Got response:', data);
                setPrefs(data);
            });
    }, []);

    return <div>{prefs?.theme}</div>;
}