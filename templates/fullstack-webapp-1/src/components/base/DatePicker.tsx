/* eslint-disable-next-line import/no-extraneous-dependencies */
import dayjsGenerateConfig from 'rc-picker/lib/generate/dayjs';
import generatePicker from 'antd/lib/date-picker/generatePicker';
import 'antd/lib/date-picker/style/index';
import { Dayjs } from 'dayjs';

/**
 * Ant Design DatePicker
 *
 * - moment.js를 date-fns로 교체
 */
const DatePicker = generatePicker<Dayjs>(dayjsGenerateConfig);

export default DatePicker;
