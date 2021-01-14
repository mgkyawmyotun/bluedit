import { useGetJoinSub, useUserContext } from '@bluedit/controller';
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
    const { data: userdata } = useUserContext();

    return (
      <>
        <Select
          placeholder={SelectPlaceHolder}
          optionFilterProp="children"
          className={styles.submit__main__choser}
          onChange={(value) => {
            subName.setName(value.toString());
          }}
          value={subName.subBlueditName}
          loading={loading}
        >
          {!loading &&
            data &&
            userdata &&
            data.getJoinSub &&
            [
              {
                sub: {
                  displayName: userdata.me.displayName,
                  picture_url: userdata.me.picture_url,
                  name: '',
                  username: userdata.me.username,
                  isUser: true,
                },
              },
              ,
              ...data.getJoinSub,
            ].map((join) => {
              return (
                <Select.Option value={join.sub.name} key={join.sub.name}>
                  <SelectOption
                    value={
                      (join.sub as any).isUser
                        ? 'u/' + (join.sub as any).username
                        : 'r/' + join.sub.name
                    }
                    src={join.sub.picture_url}
                  />
                </Select.Option>
              );
            })}
        </Select>
        ,{' '}
      </>
    );
  }
);
