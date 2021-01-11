import { useGetJoinSub } from '@bluedit/controller';
import { Select } from 'antd';
import { observer } from 'mobx-react';
import Image from 'next/image';
import { FC } from 'react';
import { SelectOption } from '../main/SelectOption';
import { SubBluedit } from '../store';
import styles from './../../../styles/submit.module.css';
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
export const MainChoser: FC<{ subName: SubBluedit }> = observer(
  ({ subName }) => {
    const { data, loading } = useGetJoinSub();
    return (
      <>
        <Select
          placeholder={SelectPlaceHolder}
          optionFilterProp="children"
          className={styles.submit__main__choser}
          onChange={(value) => {
            subName.setName(value.toString());
          }}
        >
          {!loading &&
            data &&
            data.getJoinSub &&
            data.getJoinSub.map((join) => {
              return (
                <Select.Option value={join.sub.name} key={join.sub.name}>
                  <SelectOption value={'r/' + join.sub.name} />
                </Select.Option>
              );
            })}
        </Select>
        ,{' '}
      </>
    );
  }
);
