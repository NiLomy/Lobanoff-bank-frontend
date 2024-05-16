export type MessageType = {
  id: string;
  senderId: string;
  senderName: string;
  content: string;
  isSupport: boolean;
  timestamp: string;
};

export type MessageRequestType = {
  senderId: string;
  senderName: string;
  content: string;
  isSupport: boolean;
  timestamp: Date;
};
