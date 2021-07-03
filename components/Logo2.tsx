import React, { FunctionComponent } from 'react';

const Logo2: FunctionComponent = () => {
  return (
    <div style={{ width: 'auto' }}>
      <img
        className="bottomLogo"
        src="/uploads/ITC_logo1_bf70fb9e1e.svg"
        alt="ITC logo"
      />
      <p className="text-logo-sp md:text-logo-pc font-regular">
        ©ITC CORPORATION
      </p>
    </div>
  );
};

export default Logo2;
