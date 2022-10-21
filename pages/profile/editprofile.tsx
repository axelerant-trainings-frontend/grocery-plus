import Image from 'next/image';
import React from 'react';
import Button from '../../components/button/Button';
import Icon from '../../components/Icon/Icon';
import { CameraIcon } from '../../components/iconLibrary';
import InputField from '../../components/inputField/InputField';
import Layout from '../../components/layout/Layout';
function editprofile() {
  return (
    <Layout hasNavbar={false} pageTitle="Edit Page" link="/profile">
      <div className="relative">
        <div className="mx-auto mb-47 mt-60 w-138">
          <Image
            className="mx-auto mt-60 rounded-full"
            src="/favicon.ico"
            width={138}
            height={138}
            alt="profile picture"
          />
        </div>
        <div className="absolute left-224 bottom-9 flex h-35 w-35 items-center rounded-full bg-orange-light">
          <Icon
            icon={CameraIcon}
            variant="white"
            extraClasses="mx-auto"
            height="15"
            width="16"
          />
        </div>
      </div>
      <div className="mx-auto mt-48 w-343">
        <InputField
          label="Name"
          icon="left"
          placeholder="Enter your name"
          variant="text"
          extraClasses="mb-15"
        />
        <InputField
          label="Password"
          icon="both"
          placeholder="Enter your password"
          variant="password"
          extraClasses="mb-15"
        />
        <InputField
          label="Phone"
          icon="left"
          placeholder="Enter your phone"
          variant="number"
          extraClasses="mb-15"
        />
      </div>
      <div className="mt-220 mb-35">
        <Button
          text="Save"
          iconRight={true}
          variant="primary-dark"
          extraClasses="mx-auto h-48 w-343"
        />
      </div>
    </Layout>
  );
}

export default editprofile;
