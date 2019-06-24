import getConfig from 'next-server/config';
const { publicRuntimeConfig } = getConfig();
const pathPrefix = publicRuntimeConfig.pathPrefix;

const Image = ({ src, ...rest }) => {
  const path = `${pathPrefix}/static/${src}`;

  return <img src={path} {...rest} />
}

export default Image;
