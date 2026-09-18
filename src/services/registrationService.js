const STORAGE_KEY = 'shinobi_event_registrations';

export const registrationService = {
  async submitRegistration(data) {
    // Simulate brief network / ninja seal validation delay
    await new Promise((resolve) => setTimeout(resolve, 850));

    const passNumber = Math.floor(1000 + Math.random() * 9000);
    const squadCode = data.numberOfParticipants > 1 ? `SQUAD-${passNumber}` : `NINJA-${passNumber}`;

    const newRecord = {
      ...data,
      id: `reg_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
      passCode: `SHINOBI-82A-${squadCode}`,
      registeredAt: new Date().toISOString(),
      status: 'CONFIRMED',
      eventDate: 'Saturday & Sunday, 10:00 AM - 7:00 PM',
      venue: 'Felix Plaza, Sector 82A, Gurugram',
    };

    try {
      const existing = registrationService.getAll();
      existing.unshift(newRecord);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(existing.slice(0, 20)));
    } catch {
      // Ignore localStorage quotas in restricted environments
    }

    return newRecord;
  },

  getAll() {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        return JSON.parse(saved);
      }
    } catch {
      // fallback
    }
    return [];
  },
};
