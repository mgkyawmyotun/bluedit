import { PlusOutlined } from '@ant-design/icons';
import { message, Upload } from 'antd';
import Modal from 'antd/lib/modal/Modal';
import { UploadFile } from 'antd/lib/upload/interface';
import { FC, useState } from 'react';
import { Title } from './Title';
function getBase64(file: any) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
}
const uploadButton = (
  <div>
    <PlusOutlined />
    <div style={{ marginTop: 8 }}>Upload</div>
  </div>
);
export const ImageVideoTab: FC = () => {
  const [fileList, setFileList] = useState([]);
  const [previewVisible, setPreviewVisible] = useState<boolean>(false);
  const [previewTitle, setPreviewTitle] = useState<string>();
  const [previewImage, setPreviewImage] = useState<string>();
  const beforeUpload = (file: UploadFile<Blob>) => {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
    if (!isJpgOrPng) {
      file.status = 'error';
      message.error('You can only upload JPG/PNG file!');
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      file.status = 'error';
      message.error('Image must smaller than 2MB!');
    }
    return isJpgOrPng && isLt2M;
  };

  const handleCancel = () => setPreviewVisible(false);

  const handlePreview = async (file: UploadFile<any>) => {
    if (file.status == 'error') {
      message.error('Cannot Preview Image/Image has an Error');
      return;
    }
    if (!file.url && !file.preview) {
      try {
        const data = await getBase64(file.originFileObj);
        file.preview = data as string;
      } catch (error) {
        console.log(error);
      }
    }
    setPreviewImage(file.url || file.preview);
    setPreviewVisible(true);
    setPreviewTitle(
      file.name || file.url.substring(file.url.lastIndexOf('/') + 1)
    );
  };
  const handleChange = ({ fileList }) => setFileList(fileList);

  return (
    <div>
      <Title />
      <div>
        <Upload
          listType="picture-card"
          accept=".jpg, .jpeg, .png"
          fileList={fileList}
          onPreview={handlePreview}
          onChange={handleChange}
          beforeUpload={beforeUpload}
        >
          {fileList.length >= 5 ? null : uploadButton}
        </Upload>
        <Modal
          visible={previewVisible}
          title={previewTitle}
          footer={null}
          closeIcon={true}
          closable
          onCancel={handleCancel}
        >
          <img alt="example" style={{ width: '100%' }} src={previewImage} />
        </Modal>
      </div>
    </div>
  );
};
