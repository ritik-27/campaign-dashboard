export const campaignsData = [
  {
    id: 1,
    name: "New Customer Welcome Campaign",
    type: "SMS",
    campaignType: "Broadcast",
    editedDate: "Jul 11, 2023",
    message: "Hey there, This is Soham from SaaS Team. Welcome to our platform!",
    recipientSource: "SaaS",
    recipientCount: 2,
    status: "Approval pending",
    createdOn: "02 Jan 2024",
    description: "Welcome message for new customers",
    stats: {
      sent: 14017,
      delivered: 7572,
      response: 2158,
      conversation: 1590,
      validNumbers: 67,
      invalidNumbers: 500,
      optOut: 13,
      responseRate: 11.35
    },
    details: {
      totalRecipients: 15017,
      channel: "WhatsApp",
      senderId: "98181928198",
      creditsConsumed: 20000
    },
    chartData: [
      { name: 'Sent', value: 14017 },
      { name: 'Delivered', value: 7572 },
      { name: 'Response', value: 2158 },
      { name: 'Conversation', value: 1590 }
    ]
  },
  {
    id: 2,
    name: "Lead Follow-up Campaign",
    type: "SMS",
    campaignType: "Broadcast",
    editedDate: "Jul 11, 2023",
    message: "Hello {csv.FIRSTNAME}, Thank you for your interest in our services!",
    recipientSource: "SaaS",
    recipientCount: 4,
    status: "Draft",
    createdOn: "02 Jan 2024",
    description: "Follow-up campaign for interested leads",
    stats: {
      sent: 8500,
      delivered: 8200,
      response: 1200,
      conversation: 850,
      validNumbers: 95,
      invalidNumbers: 100,
      optOut: 8,
      responseRate: 14.63
    },
    details: {
      totalRecipients: 8500,
      channel: "SMS",
      senderId: "98181928199",
      creditsConsumed: 8500
    },
    chartData: [
      { name: 'Sent', value: 8500 },
      { name: 'Delivered', value: 8200 },
      { name: 'Response', value: 1200 },
      { name: 'Conversation', value: 850 }
    ]
  },
  {
    id: 3,
    name: "Promotional Campaign Q1",
    type: "SMS",
    campaignType: "Broadcast",
    editedDate: "Jul 11, 2023",
    message: "Don't miss our exclusive Q1 offer! Limited time only.",
    recipientSource: "SaaS",
    recipientCount: 2,
    status: "Scheduled",
    createdOn: "02 Jan 2024",
    description: "Scheduled promotional campaign",
    stats: {
      sent: 0,
      delivered: 0,
      response: 0,
      conversation: 0,
      validNumbers: 100,
      invalidNumbers: 0,
      optOut: 0,
      responseRate: 0
    },
    details: {
      totalRecipients: 5000,
      channel: "WhatsApp",
      senderId: "98181928200",
      creditsConsumed: 0
    },
    chartData: []
  },
  {
    id: 4,
    name: "Service Update Notification",
    type: "SMS",
    campaignType: "Broadcast",
    editedDate: "Jul 11, 2023",
    message: "Hello {csv.FIRSTNAME}, Important service update notification for you.",
    recipientSource: "SaaS",
    recipientCount: 2,
    status: "Aborted",
    createdOn: "02 Jan 2024",
    description: "Campaign aborted due to technical issues",
    stats: {
      sent: 500,
      delivered: 450,
      response: 50,
      conversation: 20,
      validNumbers: 90,
      invalidNumbers: 50,
      optOut: 5,
      responseRate: 11.11
    },
    details: {
      totalRecipients: 10000,
      channel: "SMS",
      senderId: "98181928201",
      creditsConsumed: 500
    },
    chartData: [
      { name: 'Sent', value: 500 },
      { name: 'Delivered', value: 450 },
      { name: 'Response', value: 50 },
      { name: 'Conversation', value: 20 }
    ]
  },
  {
    id: 5,
    name: "Product Launch Announcement",
    type: "SMS",
    campaignType: "Broadcast",
    editedDate: "Jul 11, 2023",
    message: "Exciting news! Check out our new product with amazing features.",
    recipientSource: "SaaS",
    recipientCount: 2,
    status: "Ongoing",
    createdOn: "02 Jan 2024",
    description: "Active campaign for product launch",
    stats: {
      sent: 12000,
      delivered: 11500,
      response: 2300,
      conversation: 1800,
      validNumbers: 98,
      invalidNumbers: 200,
      optOut: 10,
      responseRate: 20.0
    },
    details: {
      totalRecipients: 12000,
      channel: "WhatsApp",
      senderId: "98181928202",
      creditsConsumed: 12000
    },
    chartData: [
      { name: 'Sent', value: 12000 },
      { name: 'Delivered', value: 11500 },
      { name: 'Response', value: 2300 },
      { name: 'Conversation', value: 1800 }
    ]
  },
  {
    id: 6,
    name: "Account Verification Reminder",
    type: "SMS",
    campaignType: "Broadcast",
    editedDate: "Jul 11, 2023",
    message: "Hello {csv.FIRSTNAME}, Please verify your account to continue using our services.",
    recipientSource: "SaaS",
    recipientCount: 2,
    status: "Aborted",
    createdOn: "02 Jan 2024",
    description: "Cancelled campaign",
    stats: {
      sent: 100,
      delivered: 95,
      response: 10,
      conversation: 5,
      validNumbers: 95,
      invalidNumbers: 5,
      optOut: 2,
      responseRate: 10.53
    },
    details: {
      totalRecipients: 3000,
      channel: "SMS",
      senderId: "98181928203",
      creditsConsumed: 100
    },
    chartData: [
      { name: 'Sent', value: 100 },
      { name: 'Delivered', value: 95 },
      { name: 'Response', value: 10 },
      { name: 'Conversation', value: 5 }
    ]
  },
  {
    id: 7,
    name: "Upcoming sale",
    type: "SMS",
    campaignType: "Broadcast",
    editedDate: "Jul 11, 2023",
    message: "End of season sale - Up to 70% off! Don't miss out!",
    recipientSource: "SaaS",
    recipientCount: 2,
    status: "Completed",
    createdOn: "02 Jan 2024",
    description: "End of the season sale of 2024",
    stats: {
      sent: 14017,
      delivered: 7572,
      response: 2158,
      conversation: 1590,
      validNumbers: 67,
      invalidNumbers: 500,
      optOut: 13,
      responseRate: 11.35
    },
    details: {
      totalRecipients: 15017,
      channel: "WhatsApp",
      senderId: "98181928198",
      creditsConsumed: 20000
    },
    chartData: [
      { name: 'Sent', value: 14017 },
      { name: 'Delivered', value: 7572 },
      { name: 'Response', value: 2158 },
      { name: 'Conversation', value: 1590 }
    ]
  },
  {
    id: 8,
    name: "New product launch",
    type: "SMS",
    campaignType: "Broadcast",
    editedDate: "Aug 15, 2023",
    message: "Introducing our latest product with cutting-edge technology. Check it out!",
    recipientSource: "SaaS",
    recipientCount: 5,
    status: "Ongoing",
    createdOn: "15 Jan 2024",
    description: "Product launch campaign Q1 2024",
    stats: {
      sent: 9800,
      delivered: 9200,
      response: 1850,
      conversation: 1200,
      validNumbers: 94,
      invalidNumbers: 300,
      optOut: 9,
      responseRate: 20.11
    },
    details: {
      totalRecipients: 10000,
      channel: "WhatsApp",
      senderId: "98181928204",
      creditsConsumed: 9800
    },
    chartData: [
      { name: 'Sent', value: 9800 },
      { name: 'Delivered', value: 9200 },
      { name: 'Response', value: 1850 },
      { name: 'Conversation', value: 1200 }
    ]
  },
  {
    id: 9,
    name: "Customer feedback survey",
    type: "SMS",
    campaignType: "Broadcast",
    editedDate: "Sep 20, 2023",
    message: "We value your feedback...",
    recipientSource: "SaaS",
    recipientCount: 3,
    status: "Draft",
    createdOn: "20 Jan 2024",
    description: "Monthly customer satisfaction survey",
    stats: {
      sent: 0,
      delivered: 0,
      response: 0,
      conversation: 0,
      validNumbers: 100,
      invalidNumbers: 0,
      optOut: 0,
      responseRate: 0
    },
    details: {
      totalRecipients: 5500,
      channel: "SMS",
      senderId: "98181928205",
      creditsConsumed: 0
    },
    chartData: []
  },
  {
    id: 10,
    name: "Flash sale alert",
    type: "SMS",
    campaignType: "Broadcast",
    editedDate: "Oct 05, 2023",
    message: "24-hour flash sale starts now!",
    recipientSource: "SaaS",
    recipientCount: 8,
    status: "Completed",
    createdOn: "05 Feb 2024",
    description: "Flash sale campaign - 24 hours only",
    stats: {
      sent: 18500,
      delivered: 17800,
      response: 4200,
      conversation: 3100,
      validNumbers: 96,
      invalidNumbers: 700,
      optOut: 11,
      responseRate: 23.60
    },
    details: {
      totalRecipients: 18500,
      channel: "WhatsApp",
      senderId: "98181928206",
      creditsConsumed: 18500
    },
    chartData: [
      { name: 'Sent', value: 18500 },
      { name: 'Delivered', value: 17800 },
      { name: 'Response', value: 4200 },
      { name: 'Conversation', value: 3100 }
    ]
  },
  {
    id: 11,
    name: "Holiday special offers",
    type: "SMS",
    campaignType: "Broadcast",
    editedDate: "Nov 12, 2023",
    message: "Special holiday discounts inside! ",
    recipientSource: "SaaS",
    recipientCount: 6,
    status: "Scheduled",
    createdOn: "12 Feb 2024",
    description: "Holiday season promotional campaign",
    stats: {
      sent: 0,
      delivered: 0,
      response: 0,
      conversation: 0,
      validNumbers: 100,
      invalidNumbers: 0,
      optOut: 0,
      responseRate: 0
    },
    details: {
      totalRecipients: 12000,
      channel: "WhatsApp",
      senderId: "98181928207",
      creditsConsumed: 0
    },
    chartData: []
  },
  {
    id: 12,
    name: "Win back inactive users",
    type: "SMS",
    campaignType: "Broadcast",
    editedDate: "Dec 01, 2023",
    message: "We miss you! Here's 30% off...",
    recipientSource: "SaaS",
    recipientCount: 4,
    status: "Ongoing",
    createdOn: "01 Mar 2024",
    description: "Re-engagement campaign for inactive users",
    stats: {
      sent: 6500,
      delivered: 6100,
      response: 980,
      conversation: 650,
      validNumbers: 93,
      invalidNumbers: 400,
      optOut: 7,
      responseRate: 16.07
    },
    details: {
      totalRecipients: 7000,
      channel: "SMS",
      senderId: "98181928208",
      creditsConsumed: 6500
    },
    chartData: [
      { name: 'Sent', value: 6500 },
      { name: 'Delivered', value: 6100 },
      { name: 'Response', value: 980 },
      { name: 'Conversation', value: 650 }
    ]
  },
  {
    id: 13,
    name: "Birthday special wishes",
    type: "SMS",
    campaignType: "Broadcast",
    editedDate: "Jan 10, 2024",
    message: "Happy Birthday! Enjoy your gift...",
    recipientSource: "SaaS",
    recipientCount: 1,
    status: "Approval pending",
    createdOn: "10 Mar 2024",
    description: "Automated birthday wishes campaign",
    stats: {
      sent: 3200,
      delivered: 3150,
      response: 850,
      conversation: 420,
      validNumbers: 98,
      invalidNumbers: 50,
      optOut: 3,
      responseRate: 26.98
    },
    details: {
      totalRecipients: 3200,
      channel: "WhatsApp",
      senderId: "98181928209",
      creditsConsumed: 3200
    },
    chartData: [
      { name: 'Sent', value: 3200 },
      { name: 'Delivered', value: 3150 },
      { name: 'Response', value: 850 },
      { name: 'Conversation', value: 420 }
    ]
  },
  {
    id: 14,
    name: "Webinar invitation",
    type: "SMS",
    campaignType: "Broadcast",
    editedDate: "Feb 14, 2024",
    message: "Join our exclusive webinar...",
    recipientSource: "SaaS",
    recipientCount: 7,
    status: "Draft",
    createdOn: "14 Mar 2024",
    description: "Webinar promotion for enterprise customers",
    stats: {
      sent: 0,
      delivered: 0,
      response: 0,
      conversation: 0,
      validNumbers: 100,
      invalidNumbers: 0,
      optOut: 0,
      responseRate: 0
    },
    details: {
      totalRecipients: 4500,
      channel: "SMS",
      senderId: "98181928210",
      creditsConsumed: 0
    },
    chartData: []
  },
  {
    id: 15,
    name: "Order confirmation",
    type: "SMS",
    campaignType: "Broadcast",
    editedDate: "Mar 01, 2024",
    message: "Your order has been confirmed. Track your shipment in the app.",
    recipientSource: "SaaS",
    recipientCount: 12,
    status: "Completed",
    createdOn: "20 Mar 2024",
    description: "Automated order confirmation messages",
    stats: {
      sent: 25000,
      delivered: 24800,
      response: 1200,
      conversation: 800,
      validNumbers: 99,
      invalidNumbers: 200,
      optOut: 4,
      responseRate: 4.84
    },
    details: {
      totalRecipients: 25000,
      channel: "SMS",
      senderId: "98181928211",
      creditsConsumed: 25000
    },
    chartData: [
      { name: 'Sent', value: 25000 },
      { name: 'Delivered', value: 24800 },
      { name: 'Response', value: 1200 },
      { name: 'Conversation', value: 800 }
    ]
  },
  {
    id: 16,
    name: "Payment reminder",
    type: "SMS",
    campaignType: "Broadcast",
    editedDate: "Mar 15, 2024",
    message: "Reminder: Payment due soon...",
    recipientSource: "SaaS",
    recipientCount: 3,
    status: "Aborted",
    createdOn: "25 Mar 2024",
    description: "Payment reminder for subscriptions",
    stats: {
      sent: 1500,
      delivered: 1480,
      response: 320,
      conversation: 180,
      validNumbers: 98,
      invalidNumbers: 20,
      optOut: 2,
      responseRate: 21.62
    },
    details: {
      totalRecipients: 2000,
      channel: "SMS",
      senderId: "98181928212",
      creditsConsumed: 1500
    },
    chartData: [
      { name: 'Sent', value: 1500 },
      { name: 'Delivered', value: 1480 },
      { name: 'Response', value: 320 },
      { name: 'Conversation', value: 180 }
    ]
  },
  {
    id: 17,
    name: "App update notification",
    type: "SMS",
    campaignType: "Broadcast",
    editedDate: "Apr 01, 2024",
    message: "New features available! Update now to experience improvements.",
    recipientSource: "SaaS",
    recipientCount: 9,
    status: "Ongoing",
    createdOn: "01 Apr 2024",
    description: "App update announcement campaign",
    stats: {
      sent: 15500,
      delivered: 14900,
      response: 2100,
      conversation: 1450,
      validNumbers: 96,
      invalidNumbers: 600,
      optOut: 8,
      responseRate: 14.09
    },
    details: {
      totalRecipients: 16000,
      channel: "WhatsApp",
      senderId: "98181928213",
      creditsConsumed: 15500
    },
    chartData: [
      { name: 'Sent', value: 15500 },
      { name: 'Delivered', value: 14900 },
      { name: 'Response', value: 2100 },
      { name: 'Conversation', value: 1450 }
    ]
  },
  {
    id: 18,
    name: "Referral program launch",
    type: "SMS",
    campaignType: "Broadcast",
    editedDate: "Apr 20, 2024",
    message: "Refer a friend and earn rewards! Start earning today.",
    recipientSource: "SaaS",
    recipientCount: 5,
    status: "Scheduled",
    createdOn: "20 Apr 2024",
    description: "Referral program announcement",
    stats: {
      sent: 0,
      delivered: 0,
      response: 0,
      conversation: 0,
      validNumbers: 100,
      invalidNumbers: 0,
      optOut: 0,
      responseRate: 0
    },
    details: {
      totalRecipients: 8000,
      channel: "WhatsApp",
      senderId: "98181928214",
      creditsConsumed: 0
    },
    chartData: []
  },
  {
    id: 19,
    name: "Customer appreciation day",
    type: "SMS",
    campaignType: "Broadcast",
    editedDate: "May 05, 2024",
    message: "Thank you for being with us!",
    recipientSource: "SaaS",
    recipientCount: 11,
    status: "Approval pending",
    createdOn: "05 May 2024",
    description: "Customer appreciation campaign",
    stats: {
      sent: 22000,
      delivered: 21500,
      response: 5200,
      conversation: 3800,
      validNumbers: 97,
      invalidNumbers: 500,
      optOut: 6,
      responseRate: 24.19
    },
    details: {
      totalRecipients: 22000,
      channel: "WhatsApp",
      senderId: "98181928215",
      creditsConsumed: 22000
    },
    chartData: [
      { name: 'Sent', value: 22000 },
      { name: 'Delivered', value: 21500 },
      { name: 'Response', value: 5200 },
      { name: 'Conversation', value: 3800 }
    ]
  },
  {
    id: 20,
    name: "Summer collection preview",
    type: "SMS",
    campaignType: "Broadcast",
    editedDate: "May 25, 2024",
    message: "Check out our new summer collection! Fresh styles just arrived.",
    recipientSource: "SaaS",
    recipientCount: 6,
    status: "Draft",
    createdOn: "25 May 2024",
    description: "New season collection launch",
    stats: {
      sent: 0,
      delivered: 0,
      response: 0,
      conversation: 0,
      validNumbers: 100,
      invalidNumbers: 0,
      optOut: 0,
      responseRate: 0
    },
    details: {
      totalRecipients: 13000,
      channel: "WhatsApp",
      senderId: "98181928216",
      creditsConsumed: 0
    },
    chartData: []
  }
];