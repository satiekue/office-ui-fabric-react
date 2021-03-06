import { FontSizes } from '../AzureType';
import * as StyleConstants from '../Constants';
import { IDatePickerStyles, IDatePickerStyleProps } from 'office-ui-fabric-react/lib/DatePicker';

export const DatePickerStyles = (props: IDatePickerStyleProps): Partial<IDatePickerStyles> => {
  const { disabled, theme } = props;
  if (!theme) {
    return {};
  }

  const { semanticColors } = theme;
  const TextHoverStyle = () => {
    return {
      color: semanticColors.bodyText,
      backgroundColor: StyleConstants.transparent
    };
  };
  const TodayAndSelectedDayStyle = () => {
    return {
      '.ms-DatePicker-day-button.ms-DatePicker-day--today': {
        backgroundColor: semanticColors.bodyBackground,
        color: semanticColors.bodyText
      },
      '.ms-DatePicker-day-button.ms-DatePicker-day--today:active': {
        backgroundColor: StyleConstants.transparent,
        color: semanticColors.bodyText
      },
      '.ms-DatePicker-day-button.ms-DatePicker-day--today:hover': {
        color: semanticColors.bodyText
      },
      '.ms-DatePicker-day--highlighted': {
        backgroundColor: StyleConstants.transparent,
        color: semanticColors.bodyText
      },
      '.ms-DatePicker-day--highlighted > .ms-DatePicker-day-button': {
        backgroundColor: semanticColors.listItemBackgroundChecked,
        color: semanticColors.bodyText
      },
      '.ms-DatePicker-day--highlighted > .ms-DatePicker-day--today': {
        color: semanticColors.bodyText
      }
    };
  };
  const HoverStyles = () => {
    return {
      '.ms-DatePicker-day--highlighted:hover': {
        backgroundColor: semanticColors.listItemBackgroundChecked,
        color: semanticColors.bodyText
      },
      '.ms-DatePicker-day--highlighted > .ms-DatePicker-day-button:hover': {
        backgroundColor: semanticColors.listItemBackgroundChecked,
        color: semanticColors.bodyText
      },
      '.ms-DatePicker-day--infocus:hover': {
        ...TextHoverStyle()
      },
      '.ms-DatePicker-currentDecade:hover': { color: semanticColors.bodyText },
      '.ms-DatePicker-day--outfocus:hover': {
        ...TextHoverStyle()
      },
      '.ms-DatePicker-monthAndYear:hover': { color: semanticColors.bodyText },
      '.ms-DatePicker-weekday:hover': { color: semanticColors.bodyText },
      '.ms-DatePicker-monthOption:hover': {
        ...TextHoverStyle()
      },
      '.ms-DatePicker-header > .ms-DatePicker-currentYear:hover': { color: semanticColors.bodyText },
      '.ms-DatePicker-prevMonth:hover': {
        ...TextHoverStyle()
      },
      '.ms-DatePicker-nextMonth:hover': {
        ...TextHoverStyle()
      },
      '.ms-DatePicker-prevYear:hover': {
        ...TextHoverStyle()
      },
      '.ms-DatePicker-nextYear:hover': {
        ...TextHoverStyle()
      },
      '.ms-DatePicker-goToday:hover': {
        color: semanticColors.bodyText
      },
      '.ms-DatePicker-yearOption:hover': {
        ...TextHoverStyle()
      },
      '.ms-DatePicker-prevDecade:hover': {
        ...TextHoverStyle()
      },
      '.ms-DatePicker-nextDecade:hover': {
        ...TextHoverStyle()
      }
    };
  };
  return {
    callout: {
      fontSize: FontSizes.size12,
      backgroundColor: semanticColors.bodyBackground,
      color: semanticColors.bodyText,
      selectors: {
        '.ms-Callout-main': {
          fontWeight: StyleConstants.fontWeightBold,
          backgroundColor: semanticColors.bodyBackground
        },
        '.ms-DatePicker-table > thead > tr': {
          borderBottom: `${StyleConstants.borderWidth} solid ${semanticColors.bodyText}`
        },
        '.ms-DatePicker-day': {
          border: 'none',
          selectors: {
            '.ms-DatePicker-day-button': {
              fontWeight: StyleConstants.fontWeightBold
            }
          }
        },
        '.ms-DatePicker-day--infocus': { color: semanticColors.bodyBackground },
        '.ms-DatePicker-currentDecade': { color: semanticColors.bodyBackground },
        '.ms-DatePicker-day--outfocus': { color: semanticColors.bodyBackground },
        '.ms-DatePicker-monthAndYear': { color: semanticColors.bodyBackground },
        '.ms-DatePicker-weekday': { color: semanticColors.bodyBackground, fontWeight: StyleConstants.fontWeightBold },
        '.ms-DatePicker-monthOption': { color: semanticColors.bodyBackground, fontWeight: StyleConstants.fontWeightBold },
        '.ms-DatePicker-currentYear': { color: semanticColors.bodyBackground },
        '.ms-DatePicker-prevMonth': { color: semanticColors.bodyBackground },
        '.ms-DatePicker-nextMonth': { color: semanticColors.bodyBackground },
        '.ms-DatePicker-prevYear': { color: semanticColors.bodyBackground },
        '.ms-DatePicker-nextYear': { color: semanticColors.bodyBackground },
        '.ms-DatePicker-prevDecade': { color: semanticColors.bodyBackground },
        '.ms-DatePicker-nextDecade': { color: semanticColors.bodyBackground },
        '.ms-DatePicker-goToday': { color: semanticColors.bodyBackground },
        '.ms-DatePicker-goToday[disabled]': { display: 'none' },
        '.ms-DatePicker-yearOption': { color: semanticColors.bodyBackground, fontWeight: StyleConstants.fontWeightBold },
        '.ms-DatePicker-yearOption--disabled': { color: semanticColors.bodyBackground },
        '.ms-DatePicker-monthOption--disabled': { color: semanticColors.bodyBackground },
        '.ms-DatePicker-day--disabled': { color: semanticColors.bodyBackground },
        '.ms-DatePicker-nextDecade--disabled': { color: semanticColors.bodyBackground },
        '.ms-DatePicker-prevDecade--disabled': { color: semanticColors.bodyBackground },
        '.ms-DatePicker-prevYear--disabled': { color: semanticColors.bodyBackground },
        '.ms-DatePicker-nextYear--disabled': { color: semanticColors.bodyBackground },
        '.ms-DatePicker-prevMonth--disabled': { color: semanticColors.bodyBackground },
        '.ms-DatePicker-nextMonth--disabled': { color: semanticColors.bodyBackground },
        ...TodayAndSelectedDayStyle(),
        ...HoverStyles()
      }
    },
    icon: [
      {
        color: semanticColors.bodyText,
        top: '2px'
      },
      disabled && {
        color: semanticColors.disabledBodyText
      }
    ],
    root: [
      {
        fontSize: FontSizes.size12,
        fontWeight: StyleConstants.fontWeightBold
      },
      disabled && {
        border: `${StyleConstants.borderWidth} solid ${semanticColors.disabledBodyText}`,
        color: semanticColors.disabledBodyText
      }
    ]
  };
};
