import { Project } from './project.model';
import {
  DEFAULT_PROJECT_COLOR,
  WORK_CONTEXT_DEFAULT_COMMON,
  WORK_CONTEXT_DEFAULT_THEME,
} from '../work-context/work-context.const';

export const DEFAULT_PROJECT: Project = {
  isHiddenFromMenu: false,
  isArchived: false,
  isEnableBacklog: false,
  backlogTaskIds: [],
  noteIds: [],
  ...WORK_CONTEXT_DEFAULT_COMMON,
  theme: {
    ...WORK_CONTEXT_DEFAULT_THEME,
    primary: DEFAULT_PROJECT_COLOR,
  },
};
