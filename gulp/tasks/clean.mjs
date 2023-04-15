/* eslint-disable import/no-extraneous-dependencies */
import {deleteAsync} from 'del';
import config from '../config.mjs';

const clean = () => deleteAsync(config.path.clean);

export default clean;
