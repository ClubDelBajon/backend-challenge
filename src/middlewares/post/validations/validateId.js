import { check } from 'express-validator';
import errorCodes from '../../../constants/errorCodes';

const { ID_INVALID } = errorCodes;

const validateId = check('id', ID_INVALID).isString();

export default validateId;
