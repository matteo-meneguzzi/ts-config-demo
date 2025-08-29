export declare module './chats.js' {
  type Chat = {
    time: string;
    message: string;
  };

  function log(chats: Chat[]): void;
  const chats: Chat[];
}
