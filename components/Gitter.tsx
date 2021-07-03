import React from 'react';

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    gitter: any;
  }
}

const Gitter = ({
  room,
  title = 'Open chat',
}: {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  room: any;
  title: string;
}): JSX.Element => {
  React.useEffect(() => {
    window.gitter = {
      chat: {
        options: {
          showChatByDefault: false,
          activationElement: '.gitter-open-chat-button',
          room: room,
        },
      },
    };
    const s = document.createElement('script');
    s.setAttribute('src', 'https://sidecar.gitter.im/dist/sidecar.v1.js');
    s.async = true;
    s.defer = true;
    document.body.appendChild(s);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div>
      <div className="gitter-open-chat-button">{title}</div>
    </div>
  );
};

export default Gitter;
