import { Tag } from './tag.model';
import {
  DEFAULT_TAG_COLOR,
  DEFAULT_TODAY_TAG_COLOR,
  WORK_CONTEXT_DEFAULT_COMMON,
  WORK_CONTEXT_DEFAULT_THEME,
} from '../work-context/work-context.const';

export const TODAY_TAG: Tag = {
  color: null,
  created: Date.now(),
  ...WORK_CONTEXT_DEFAULT_COMMON,
  icon: 'wb_sunny',
  title: 'Today',
  id: 'TODAY',
  theme: {
    ...WORK_CONTEXT_DEFAULT_THEME,
    isAutoContrast: false,
    huePrimary: '400',
    hueAccent: '500',
    hueWarn: '500',
    primary: DEFAULT_TODAY_TAG_COLOR,
    // backgroundImageDark: 'assets/bg/NIGHT_manuel-will.jpg',
    backgroundImageDark: '',
    isDisableBackgroundGradient: false,
  },
};

export const DEFAULT_TAG: Tag = {
  color: null,
  created: Date.now(),
  ...WORK_CONTEXT_DEFAULT_COMMON,
  icon: null,
  title: '',
  id: '',
  theme: {
    ...WORK_CONTEXT_DEFAULT_THEME,
    primary: DEFAULT_TAG_COLOR,
  },
};

export const LEGACY_NO_LIST_TAG_ID = 'NO_LIST' as const;
export const INBOX_TAG: Tag = {
  color: null,
  created: Date.now(),
  ...WORK_CONTEXT_DEFAULT_COMMON,
  icon: 'inbox',
  title: 'Inbox',
  // _TAG to distinguish from legacy default project
  id: 'INBOX_TAG',
  theme: {
    ...WORK_CONTEXT_DEFAULT_THEME,
    primary: 'rgb(144, 187, 165)',
    backgroundImageDark: '',
    isDisableBackgroundGradient: false,
  },
};

// TODO translate
export const URGENT_TAG: Tag = {
  color: null,
  created: Date.now(),
  ...WORK_CONTEXT_DEFAULT_COMMON,
  icon: 'emergency',
  title: 'urgent',
  id: 'EM_URGENT',
  theme: {
    ...WORK_CONTEXT_DEFAULT_THEME,
    primary: '#c618e1',
    backgroundImageDark: '',
    isDisableBackgroundGradient: false,
  },
};

export const IMPORTANT_TAG: Tag = {
  color: null,
  created: Date.now(),
  ...WORK_CONTEXT_DEFAULT_COMMON,
  icon: 'priority_high',
  title: 'important',
  id: 'EM_IMPORTANT',
  theme: {
    ...WORK_CONTEXT_DEFAULT_THEME,
    primary: '#e11826',
    backgroundImageDark: '',
    isDisableBackgroundGradient: false,
  },
};

export const IN_PROGRESS_TAG: Tag = {
  color: null,
  created: Date.now(),
  ...WORK_CONTEXT_DEFAULT_COMMON,
  title: 'in-progress',
  id: 'KANBAN_IN_PROGRESS',
  theme: {
    ...WORK_CONTEXT_DEFAULT_THEME,
    backgroundImageDark: '',
    isDisableBackgroundGradient: false,
  },
};
