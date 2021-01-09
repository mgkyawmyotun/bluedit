import { Select } from 'antd';
import Image from 'next/image';
import { FC } from 'react';
import { SelectOption } from '../main/SelectOption';
import styles from './../../../styles/submit.module.css';

interface MainChoserProps {}

const SelectPlaceHolder = (
  <div className={styles.select__placeholder}>
    <div>
      <Image
        src="/dottedavatar.svg"
        width={20}
        height={30}
        className={styles.select__placeholder__image}
      />
    </div>
    <div> Chose A Community</div>
  </div>
);
export const MainChoser: FC = () => {
  return (
    <>
      <Select
        showSearch
        placeholder={SelectPlaceHolder}
        optionFilterProp="children"
        className={styles.submit__main__choser}
      >
        <Select.Option value={'One'}>
          <SelectOption value={'kyawmyotun'} />
        </Select.Option>
      </Select>
      ,{' '}
    </>
  );
};
