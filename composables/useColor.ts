import colors from '@/assets/styles/var.module.scss';
export function useColor(){
  const Brand = {
    color_165dff_normal: colors.color165dffNormal,
    color_4080ff_hover: colors.color4080ffHover,
    color_0e42d2_click: colors.color0e42d2Click,
    color_6aa1ff_special: colors.color6aa1ffSpecial,
    color_94bfff_disabled: colors.color94bfffDisabled,
    color_bedaff_text_disabled: colors.colorBedaffTextDisabled,
    color_e8f3ff_light_hover: colors.colorE8f3ffLightHover,
    color_165dff10_normal: colors.color165dff10Normal,
    color_4080ff10_hover: colors.color4080ff10Hover,
    color_0e42d210_click: colors.color0e42d210Click,
    color_6aa1ff10_special: colors.color6aa1ff10Special,
    color_94bfff10_disabled: colors.color94bfff10Disabled,
    color_bedaff10_text_disabled: colors.colorBedaff10TextDisabled,
    color_e8f3ff10_light_hover: colors.colorE8f3ff10LightHover
  };
  const Neutral = {
    color_86909c_border_click: colors.color86909cBorderClick,
    color_c9cdd4_border_hover: colors.colorC9cdd4BorderHover,
    color_e5e6eb_border_normal: colors.colorE5e6ebBorderNormal,
    color_f2f3f5_border_light: colors.colorF2f3f5BorderLight,
    color_4e5969_fill_stress: colors.color4e5969FillStress,
    color_c9cdd4_fill_special: colors.colorC9cdd4FillSpecial,
    color_e5e6eb_fill_hover: colors.colorE5e6ebFillHover,
    color_f2f3f5_fill_normal: colors.colorF2f3f5FillNormal,
    color_f7f8fa_fill_disabled: colors.colorF7f8faFillDisabled,
    color_4080ff_fill_white: colors.color4080ffFillWhite,
    color_1d2129_text_stress: colors.color1d2129TextStress,
    color_4e5969_text_title: colors.color4e5969TextTitle,
    color_86909c_text_secondary: colors.color86909cTextSecondary,
    color_c9cdd4_text_grey: colors.colorC9cdd4TextGrey,
    color_ffffff_text_white: colors.colorFfffffTextWhite
  };
  const Functional = {
    color_00b42a_success_normal: colors.color00b42aSuccessNormal,
    color_23c343_success_over: colors.color23c343SuccessHover,
    color_009a29_success_lick: colors.color009a29SuccessClick,
    color_7be188_success_disabled: colors.color7be188SuccessDisabled,
    color_aff0b5_success_special: colors.colorAff0b5SuccessSpecial,
    color_e8ffea_success_light: colors.colorE8ffeaSuccessLight,
    color_ff7d00_warn_normal: colors.colorFf7d00WarnNormal,
    color_ff9a2e_warn_hover: colors.colorFf9a2eWarnHover,
    color_d25f00_warn_click: colors.colorD25f00WarnClick,
    color_ffcf8b_warn_disabled: colors.colorFfcf8bWarnDisabled,
    color_ffe4ba_warn_special: colors.colorFfe4baWarnSpecial,
    color_fff7e8_warn_light: colors.colorFff7e8WarnLight,
    color_f53f3f_error_normal: colors.colorF53f3fErrorNormal,
    color_f76560_error_jover: colors.colorF76560ErrorHover,
    color_cb2634_error_click: colors.colorCb2634ErrorClick,
    color_fbaca3_error_disabled: colors.colorFbaca3ErrorDisabled,
    color_fdcdc5_error_special: colors.colorFdcdc5ErrorSpecial,
    color_ffece8_error_light: colors.colorFfece8ErrorLight
  };
  const Cyan = {
    color_00b42a_cyan_normal: colors.color00b42aCyanNormal,
    color_23c343_cyan_hover: colors.color23c343CyanHover,
    color_009aa9_cyan_click: colors.color009aa9CyanClick,
    color_7be188_cyan_disabled: colors.color7be188CyanDisabled,
    color_aff0B5_cyan_special: colors.colorAff0B5CyanSpecial,
    color_e8ffea_cyan_light: colors.colorE8ffeaCyanLight
  };
  const OrangeRed = {
    color_f77234_orange_normal: colors.colorF77234OrangeNormal,
    color_f99057_orange_hover: colors.colorF99057OrangeHover,
    color_cc5120_orange_click: colors.colorCc5120OrangeClick,
    color_fcc59f_orange_disabled: colors.colorFcc59fOrangeDisabled,
    color_fdddc3_orange_special: colors.colorFdddc3OrangeSpecial,
    color_fff3e8_orange_light: colors.colorFff3e8OrangeLight
  };
  const Gold = {
    color_f7ba1e_gold_normal: colors.colorF7ba1eGoldNormal,
    color_f9cc45_gold_hover: colors.colorF9cc45GoldHover,
    color_cc9213_gold_click: colors.colorCc9213GoldClick,
    color_fce996_gold_disabled: colors.colorFce996GoldDisabled,
    color_fdf4bf_gold_special: colors.colorFdf4bfGoldSpecial,
    color_fffce8_gold_light: colors.colorFffce8GoldLight
  };
  const Blue = {
    color_3491fa_blue_normal: colors.color3491faBlueNormal,
    color_57a9fb_blue_hover: colors.color57a9fbBlueHover,
    color_206ccf_blue_click: colors.color206ccfBlueClick,
    color_9fd4fd_blue_disabled: colors.color9fd4fdBlueDisabled,
    color_c3e7fe_blue_special: colors.colorC3e7feBlueSpecial,
    color_e8f7ff_blue_light: colors.colorE8f7ffBlueLight
  };
  const Purple = {
    color_722ed1_purple_normal: colors.color722ed1PurpleNormal,
    color_8d4eda_purple_hover: colors.color8d4edaPurpleHover,
    color_551db0_purple_click: colors.color551db0PurpleClick,
    color_c396ed_purple_disabled: colors.colorC396edPurpleDisabled,
    color_ddbef6_purple_special: colors.colorDdbef6PurpleSpecial,
    color_f5e8ff_purple_light: colors.colorF5e8ffPurpleLight
  };
  const Yellow = {
    color_fadc19_yellow_normal: colors.colorFadc19YellowNormal,
    color_fbe842_yellow_hover: colors.colorFbe842YellowYover,
    color_cfaf0f_yellow_click: colors.colorCfaf0fYellowClick,
    color_fdfa94_yellow_disabled: colors.colorFdfa94YellowDisabled,
    color_fefebe_yellow_special: colors.colorFefebeYellowSpecial,
    color_feffe8_yellow_light: colors.colorFeffe8YellowLight
  };
  const Lime = {
    color_9fdb1d_lime_normal: colors.color9fdb1dLimeNormal,
    color_b5e241_lime_hover: colors.colorB5e241LimeHover,
    color_7Eb712_lime_click: colors.color7Eb712LimeClick,
    color_dcf190_lime_disabled: colors.colorDcf190LimeDisabled,
    color_edf8bb_lime_special: colors.colorEdf8bbLimeSpecial,
    color_fcffe8_lime_light: colors.colorFcffe8LimeLight
  };
  const PinkPurple = {
    color_d91ad9_pink_normal: colors.colorD91ad9PinkNormal,
    color_e13edb_pink_hover: colors.colorE13edbPinkHover,
    color_b010B6_pink_click: colors.colorB010B6PinkClick,
    color_f08ee6_pink_disabled: colors.colorF08EE6PinkDisabled,
    color_f7baef_pink_special: colors.colorF7baefPinkSpecial,
    color_ffe8fb_pink_light: colors.colorFfe8fbPinkLight
  };
  const Magenta = {
    color_f5319d_magenta_normal: colors.colorF5319dMagentaNormal,
    color_f754a8_magenta_hover: colors.colorF754a8MagentaHover,
    color_cb1e83_magenta_click: colors.colorCb1e83MagentaClick,
    color_fb9dc7_magenta_disabled: colors.colorFb9dc7MagentaDisabled,
    color_fdc2db_magenta_special: colors.colorFdc2dbMagentaSpecial,
    color_ffe8f1_magenta_light: colors.colorFfe8f1MagentaLight
  };
  return { Brand , Neutral, Functional, Cyan, OrangeRed, Gold, Blue, Purple, Yellow, Lime, PinkPurple, Magenta };
}
