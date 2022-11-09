export const ABOUT = 'Справочник составлен благодаря и с помощью гуру сообщества Пацифистов, а также всех причастных к эксплуатации замечательного автомобиля  Chrysler Pacifica CS.\n' +
    'Все рекомендуемые запчасти – проверены на автомобилях чатлан, методы и способы ремонта – апробированы ими же. Следовательно, заслуживают полного доверия и абсолютного одобрения.\n' +
    'Также спешу напомнить, что для общительных людей функционирует чат в WhatsApp, где вежливые и веселые чатлане с удовольствием проконсультируют Вас по любым вопросам, в том числе и касающимся ремонта автомобиля.\n' +
    'Замечания и предложения по улучшению работы платформы можно присылать мне лично, скромному собирателю житейской мудрости Пацифистов всех времен и народов, удобным для Вас способом:'

export const DATA = [
    {
        title: 'Детали для ТО:',
        id: 'maintenance',
        sub_titles: [
            {subtitle: 'ВАЖНО!!!', id: 'refueling tanks', items: [
                    {
                        item_image: './images/maintenance/refueling_tanks.jpg',
                        item_code: '',
                        item_note: 'Заправочные емкости'
                    },
                ]},
            {subtitle: 'Фильтр маслянный', id: 'oil_filter', items: [
                    {
                        item_image: './images/maintenance/oil_filter_mopar_05281090.jpg',
                        item_code: '05281090 (Mopar)',
                        item_note: ''
                    },
                    {
                        item_image: './images/maintenance/oil_filter_fram_ph16.jpg',
                        item_code: 'PH16 (Fram)',
                        item_note: ''
                    },
                    {
                        item_image: './images/maintenance/oil_filter_mahle_oc23.jpg',
                        item_code: 'OC23 (Knecht/Mahle)',
                        item_note: ''
                    },
                    {
                        item_image: './images/maintenance/oil_filter_mahle_oc236.jpg',
                        item_code: 'OC236 (Knecht/Mahle)',
                        item_note: ''
                    }
                ]},
            {subtitle: 'Фильтр воздушный', id: 'air_filter', items: [
                    {
                        item_image: './images/maintenance/air_filter_mopar_05510026aa.jpg',
                        item_code: '05510026AA (Mopar)',
                        item_note: ''
                    },
                    {
                        item_image: './images/maintenance/air_filter_blue_print_ada102256.jpg',
                        item_code: 'ADA102256 (Blue Print)',
                        item_note: ''
                    },
                    {
                        item_image: './images/maintenance/air_filter_stellox_7101933sx.jpg',
                        item_code: '71-01933-SX (Stellox)',
                        item_note: ''
                    },
                    {
                        item_image: './images/maintenance/air_filter_patron_pf1534.jpg',
                        item_code: 'PF1534 (Patron)',
                        item_note: ''
                    }
                ]},
            {subtitle: 'Фильтр салона', id: 'cabin_filter', items: [
                    {
                        item_image: './images/maintenance/cabine_filter_blue_print_ada102503.jpg',
                        item_code: 'ADA102503 (Blue Print)',
                        item_note: ''
                    },
                    {
                        item_image: './images/maintenance/cabine_filter_patron_pf2250.jpg',
                        item_code: 'PF2250 (Patron)',
                        item_note: ''
                    },
                    {
                        item_image: './images/maintenance/cabine_filter_mopar_82205905.jpg',
                        item_code: '82205905 (Mopar)',
                        item_note: ''
                    }
                ]},
            {subtitle: 'Фильтр АКПП', id: 'trans_filter', items: [
                    {
                        item_image: './images/maintenance/trans_filter_mopar_4864505ab.jpg',
                        item_code: '4864505AB (Mopar)',
                        item_note: ''
                    },
                    {
                        item_image: './images/maintenance/trans_filter_fram_ft1122a.jpg',
                        item_code: 'FT1122A (Fram)',
                        item_note: 'в комплекте пробковая прокладка'
                    }
                ]},
            {subtitle: 'Свечи зажигания', id: 'spark', items: [
                    {
                        item_image: './images/maintenance/spark_plug_champion_7034.jpg',
                        item_code: '7034 (Champion)',
                        item_note: ''
                    },
                    {
                        item_image: './images/maintenance/spark_plug_ngk_7781.jpg',
                        item_code: '7781 (NGK)',
                        item_note: ''
                    },
                    {
                        item_image: './images/maintenance/spark_plug_mopar_SZFR5LP13G.jpg',
                        item_code: 'SZFR5LP13G (Mopar)',
                        item_note: ''
                    },
                    {
                        item_image: './images/maintenance/srapks_faq.jpg',
                        item_code: '',
                        item_note: ''
                    },
                ]},
            {subtitle: 'Ремень поликлинковый', id: 'belt', items: [
                    {
                        item_image: './images/maintenance/belt_mopar_04861850aa.jpg',
                        item_code: '04861850AA (Mopar)',
                        item_note: ''
                    },
                    {
                        item_image: './images/maintenance/belt_continental.jpg',
                        item_code: '6PK2370 (Continental)',
                        item_note: ''
                    },
                    {
                        item_image: './images/maintenance/belt_dayco_6pk2375.jpg',
                        item_code: '6PK2375 (Dayco)',
                        item_note: ''
                    },
                    {
                        item_image: './images/maintenance/short_belt_2050-2100.jpg',
                        item_code: '6PK 2050-2100',
                        item_note: 'Ремень в обход кондиционера'
                    },
                ]},
            {subtitle: 'Ремень ГРМ', id: 'belt_timing', items: [
                    {
                        item_image: './images/maintenance/belt_timing_gates_5674XS.jpg',
                        item_code: '5674XS (Gates)',
                        item_note: ''
                    },
                    {
                        item_image: './images/maintenance/belt_timing_dayco_94864.jpg',
                        item_code: '94864 (Dayco)',
                        item_note: ''
                    },
                    {
                        item_image: './images/maintenance/belt_timing_mopar_04792353.jpg',
                        item_code: '04792353 (Mopar)',
                        item_note: ''
                    }
                ]},
            // {subtitle: 'Термостат', id: 'thermostat', items: [
            //         {
            //             item_image: './images/maintenance/motorad_465-195.jpg',
            //             item_code: '465-195 (Motorad)',
            //             item_note: 'Термостат'
            //         },
            //         {
            //             item_image: './images/maintenance/thermostat_stant_14789.jpg',
            //             item_code: '14789 (Stant)',
            //             item_note: 'Термостат'
            //         },
            //         {
            //             item_image: './images/maintenance/thermostat_gates_33952.jpg',
            //             item_code: '33952 (Gates)',
            //             item_note: 'Термостат'
            //         },
            //         {
            //             item_image: './images/maintenance/thermostat_chrysler_68210217aa.jpg',
            //             item_code: '68210217AA (Chrysler)',
            //             item_note: 'Термостат'
            //         },
            //         {
            //             item_image: './images/cooling_system/thermostat_housting_dorman_902-698.jpg',
            //             item_code: '902-698 (Dorman)',
            //             item_note: 'верхний патрубок (корпус термостата)'
            //         },
            //         {
            //             item_image: './images/engine/water_outlet_seal_fel-pro_35651.jpg',
            //             item_code: '35651 (Fel-pro)',
            //             item_note: 'Прокладка верхнего патрубка (термостата)'
            //         },
            //         {
            //             item_image: './images/cooling_system/thermostat_housing_mopar_04781387aa.jpg',
            //             item_code: '04781387AA (Mopar)',
            //             item_note: 'верхний патрубок (корпус термостата)'
            //         },
            //
            //     ]},
            {subtitle: 'Пробка сливного отверстия', id: 'oil_drain', items: [
                    {
                        item_image: './images/maintenance/oil_drain_mopar_06507741aa.jpg',
                        item_code: '06507741AA (Mopar)',
                        item_note: 'M14-1.5'
                    }
                ]},
            {subtitle: 'Щетки стеклоочистителя', id: 'wipers'},
            // {subtitle: 'Насос системы охлаждения', id: ''},
            {subtitle: 'Колодки тормозные', id: 'break_pads', items: [
                    {
                        item_image: './images/maintenance/break_pads_patron_pbp7000.jpg',
                        item_code: 'PBP7000 (Patron)',
                        item_note: 'Передние колодки'
                    },
                    {
                        item_image: './images/maintenance/break_pads_patron_pbp7001.jpg',
                        item_code: 'PBP7001 (Patron)',
                        item_note: 'Задние колодки'
                    },
                    {
                        item_image: './images/maintenance/break_pads_raybestos_sgd997c.jpg',
                        item_code: 'SGD997C (Raybestos)',
                        item_note: 'Передние колодки'
                    },
                    {
                        item_image: './images/maintenance/break_pads_raybestos_sgd998c.jpg',
                        item_code: 'SGD998C (Raybestos)',
                        item_note: 'Задние колодки'
                    },
                    {
                        item_image: './images/maintenance/break_pads_raybestos_eht997h.jpg',
                        item_code: 'EHT997H (Raybestos)',
                        item_note: 'Передние колодки (керамика)'
                    },
                    {
                        item_image: './images/maintenance/break_pads_raybestos_eht998h.jpg',
                        item_code: 'EHT998H (Raybestos)',
                        item_note: 'Задние колодки (керамика)'
                    },
                ]},
        ]
    },
    {
        title: 'Двигатель:',
        id: 'engine',
        sub_titles: [
            {subtitle: 'Прокладки', id: 'gaskets', items: [
                    {
                        item_image: './images/engine/gaskets_enginetech_cr215hsd.jpg',
                        item_code: 'CR215HSD (Enginetech)',
                        item_note: 'Комплект прокладок'
                    },
                    {
                        item_image: './images/engine/gaskets_mahle_vs50248.jpg',
                        item_code: 'VS50248 (Mahle)',
                        item_note: 'Прокладки клапанной крышки'
                    },

                    {
                        item_image: './images/engine/water_outlet_seal_fel-pro_35631.jpg',
                        item_code: '35631 (Fel-pro)',
                        item_note: 'Прокладка нижнего патрубка ОЖ'
                    },
                    {
                        item_image: './images/engine/water_outlet_seal_fel-pro_35651.jpg',
                        item_code: '35651 (Fel-pro)',
                        item_note: 'Прокладка верхнего патрубка ОЖ (термостат)'
                    },
                    {
                        item_image: './images/engine/oil_pan_gasket_mopar_04792663aa.jpg',
                        item_code: '04792633AA (Mopar)',
                        item_note: 'Прокладка масленного поддона 2003+'
                    },
                    {
                        item_image: './images/engine/oil_pan_gasket_mopar_04892072aa.jpg',
                        item_code: '04892072AA (Mopar)',
                        item_note: 'Прокладка масленного поддона 2005+'
                    },
                ]},
            {subtitle: 'Система подачи воздуха', id: 'air_supply_system', items: [
                    {
                        item_image: './images/engine/air_intake_temperature_sensor_mopar_04606487ab.jpg',
                        item_code: '04606487AB (Mopar)',
                        item_note: 'Датчик температуры воздуха'
                    },
                    {
                        item_image: './images/engine/intake_plenum_gasket_mahle__ms19537.jpg',
                        item_code: 'MS19537 (Mahle)',
                        item_note: 'Прокладка впускного коллектора'
                    },
                    {
                        item_image: './images/engine/intake_manifold_gasket_mahle_ms16210.jpg',
                        item_code: 'MS16210 (Mahle)',
                        item_note: 'Прокладки коллектора ДВС (2шт)'
                    },
                    {
                        item_image: './images/engine/gasket_set_fel-pro_ms921651.jpg',
                        item_code: 'MS921651 (Fel-pro)',
                        item_note: 'Комплект прокладок коллектора'
                    },
                    {
                        item_image: './images/engine/throttle_body_gasket_fel-pro_61230.jpg',
                        item_code: '61230 (Fel-pro)',
                        item_note: 'Прокладка дроссельной заслонки'
                    },
                    {
                        item_image: './images/engine/throttle_body_gasket_mahle_g31666.jpg',
                        item_code: 'G31666 (Mahle)',
                        item_note: 'Прокладка дроссельной заслонки'
                    },
                ]},
            {subtitle: 'Механизм газораспределения ГРМ', id: 'timing', items: [
                    {
                        item_image: './images/engine/timing_kit_gates_tck295a.jpg',
                        item_code: 'TCK295A (Gates)',
                        item_note: 'Комплект ГРМ: Ремень + ролик(с площадкой)'
                    },
                    {
                        item_image: './images/engine/timing_kit_cloyes_bk295a.jpg',
                        item_code: 'BK295A (Cloyes)',
                        item_note: 'Комплект ГРМ: Ремень + ролик(с площадкой)'
                    },
                    {
                        item_image: './images/engine/timing_belt_tensioneer_enginetech_tt129.jpg',
                        item_code: 'TT129 (Enginetech)',
                        item_note: 'Натяжитель ГРМ'
                    },
                    {
                        item_image: './images/engine/timing_belt_tensioneer_gates_t43217.jpg',
                        item_code: 'T43217 (Gates)',
                        item_note: 'Натяжитель ГРМ'
                    },
                    {
                        item_image: './images/engine/timing_belt_tensioneer_mopar_04892109aa.jpg',
                        item_code: '04892109AA (Mopar)',
                        item_note: 'Натяжитель ГРМ'
                    },
                    {
                        item_image: './images/engine/timing_belt_tensioneer_dayco_atb2638.jpg',
                        item_code: 'ATB2638 (Dayco)',
                        item_note: 'Натяжитель ГРМ'
                    },
                    {
                        item_image: './images/engine/timing_belt_tensioneer_dayco_85048.jpg',
                        item_code: '85048 (Dayco)',
                        item_note: 'Натяжитель ГРМ'
                    },
                    {
                        item_image: './images/engine/timing_belt_tensioneer_dorman_420181.jpg',
                        item_code: '420181 (Dorman)',
                        item_note: 'Натяжитель ГРМ'
                    },
                    {
                        item_image: './images/engine/tensioner_belt_gmb_gt90010.jpg',
                        item_code: 'GT90010 (GMB)',
                        item_note: 'Ролик ГРМ (без площадки)'
                    },
                    {
                        item_image: './images/engine/tensioner_belt_dayco_atb2549.jpg',
                        item_code: 'ATB2549 (Dayco)',
                        item_note: 'Ролик ГРМ (без площадки)'
                    },
                    {
                        item_image: './images/engine/tensioner_belt_ina_532022710.jpg',
                        item_code: '532022710 (Ina)',
                        item_note: 'Ролик ГРМ (без площадки)'
                    },
                    {
                        item_image: './images/engine/timing_cover_gasket_mopar_04483443.jpg',
                        item_code: '04483443 (Mopar)',
                        item_note: 'Прокладка крышки ГРМ (2шт)'
                    },
                    {
                        item_image: './images/engine/water_pump_gasket_mopar_04659430ab.jpg',
                        item_code: '04659430AB (Mopar)',
                        item_note: 'Прокладка водяного насоса'
                    },

                    {
                        item_image: './images/engine/',
                        item_code: '',
                        item_note: ''
                    },
                ]},
            {subtitle: 'Блок-картер', id: 'crankcase_block', items: [
                    {
                        item_image: './images/engine/oil_pressure_sender_standart_ps287t.jpg',
                        item_code: 'PS287T (Standart Motor Products)',
                        item_note: 'Датчик давления масла'
                    },
                    {
                        item_image: './images/engine/oil_pressure_sender_bmw_12617513068.jpg',
                        item_code: '12617513068 (BMW)',
                        item_note: 'Датчик давления масла'
                    },
                    {
                        item_image: './images/engine/oil_pressure_sender_mopar_05149098aa.jpg',
                        item_code: '05149098AA (Mopar)',
                        item_note: 'Датчик давления масла'
                    },
                    {
                        item_image: './images/engine/oil_dipstick_chrysler_04792670ab.jpg',
                        item_code: '04792670AB (Chrysler)',
                        item_note: 'Маслянный щуп'
                    },
                    {
                        item_image: './images/engine/valve_pcv_mopar_04792962aa.jpg',
                        item_code: '04792962AA (Mopar)',
                        item_note: 'Клапан PCV'
                    },
                ]},
            {subtitle: 'Кривошипношатунный механизм', id: 'crank_mechanism', items: [
                    {
                        item_image: './images/engine/harmonic_balanser_mopar_04792989aa.jpg',
                        item_code: '04792989AA (Mopar)',
                        item_note: 'Шкив коленвала'
                    },
                    {
                        item_image: './images/engine/harmonic_balanser_nty_rkp-ch-021.jpg',
                        item_code: 'RKP-CH-021 (NTY)',
                        item_note: 'Шкив коленвала'
                    },
                    {
                        item_image: './images/engine/crankshaft_seal_mopar_04792317ab.jpg',
                        item_code: '04792317AB (Mopar)',
                        item_note: 'Сальник коленвала (ТОЛЬКО ОРИГИНАЛ)'
                    },
                    {
                        item_image: './images/engine/connecting_rod_bearing_enginetech_bb103jstd.jpg',
                        item_code: 'BB103JSTD (Enginetech)',
                        item_note: 'Вкладыши коленвала (Стандарт)'
                    },
                ]},
            {subtitle: 'Система смазки', id: 'lubrication_system', items: [
                    {
                        item_image: './images/engine/oil_pump_gasket_mopar_04648938ac.jpg',
                        item_code: '04648938AC (Mopar)',
                        item_note: 'Прокладка маслянного насоса'
                    },
                    {
                        item_image: './images/engine/oil_pump_dnj_op1150.jpg',
                        item_code: 'OP1150 (DNJ)',
                        item_note: 'Маслянный насос'
                    },
                ]},
            {subtitle: 'Крепление двигателя (подушки)', id: 'mount', items: [
                    {
                        item_image: './images/engine/motor_mount_anchor_3084.jpg',
                        item_code: '3084 (Anchor)',
                        item_note: 'подушка перед/зад'
                    },
                    {
                        item_image: './images/engine/motor_mount_dea_a5299.jpg',
                        item_code: 'A5299 (DEA)',
                        item_note: 'подушка перед/зад'
                    },
                    {
                        item_image: './images/engine/motor_mount_mopar_05510007ad.jpg',
                        item_code: '05510007AD (Mopar)',
                        item_note: 'подушка перед/зад'
                    },
                    {
                        item_image: './images/engine/motor_mount_patron_pse3951.jpg',
                        item_code: 'PSE3951 (Patron)',
                        item_note: 'подушка перед/зад'
                    },
                    {
                        item_image: './images/engine/motor_mount_westar_em3084.jpg',
                        item_code: 'EM3084 (WESTAR)',
                        item_note: 'подушка перед/зад'
                    },
                    {
                        item_image: './images/engine/motor_mount_patron_pse3273.jpg',
                        item_code: 'PSE3273 (Patron)',
                        item_note: 'подушка MB (аналог)'
                    },
                    {
                        item_image: './images/engine/strut_mount_dea_A5306.jpg',
                        item_code: 'A5306 (DEA)',
                        item_note: 'подушка АКПП'
                    },
                    {
                        item_image: './images/engine/strut_mount_skp_SKMA5306.jpg',
                        item_code: 'SKMA5306 (SKP)',
                        item_note: 'подушка АКПП'
                    },
                    {
                        item_image: './images/engine/strut_mount_westar_EM3095.jpg',
                        item_code: 'EM3095 (WESTAR)',
                        item_note: 'подушка АКПП'
                    },
                    {
                        item_image: './images/engine/motor_mount_dea_a5305.jpg',
                        item_code: 'A5305 (DEA)',
                        item_note: 'боковая подушка'
                    },
                    {
                        item_image: './images/engine/motor_mount_westar_em-5085.jpg',
                        item_code: 'EM5085 (WESTAR)',
                        item_note: 'боковая подушка'
                    },
                    {
                        item_image: './images/engine/cartrige_mount_febest_crmpacrh.jpeg',
                        item_code: 'CRMPACRH (Febest)',
                        item_note: 'картридж боковой подушки'
                    },

                ]},
            {subtitle: 'Система очистки ОГ (EGR)', id: 'exhaust_gas_cleaning_system', items: [
                    {
                        item_image: './images/engine/egr_valve_mopar_04861579ah.jpg',
                        item_code: '04861579AH (Mopar)',
                        item_note: 'Клапан EGR'
                    },
                    {
                        item_image: './images/engine/egr_gasket_mopar_04891068ab.jpg',
                        item_code: '04891068AB (Mopar)',
                        item_note: 'Прокладка клапана EGR'
                    },
                    {
                        item_image: './images/engine/egr_gasket_mopar_05277928.jpg',
                        item_code: '05277928 (Mopar)',
                        item_note: 'Прокладка клапана EGR'
                    },
                    {
                        item_image: './images/engine/egr_gasket_fel-pro_70696.jpg',
                        item_code: '70696 (Fel-pro)',
                        item_note: 'Прокладка трубки клапана EGR'
                    },
                ]},
            {subtitle: 'Ременной привод', id: 'drive_pulleys', items: [
                    {
                        item_image: './images/engine/drive_pulleys_dayco_89007.jpg',
                        item_code: '89007 (Dayco)',
                        item_note: 'Гладкий ролик (2шт)'
                    },
                    {
                        item_image: './images/engine/drive_pulleys_dayco_89144.jpg',
                        item_code: '89144 (Dayco)',
                        item_note: 'Ролик натяжителя'
                    },
                    {
                        item_image: './images/engine/drive_pulleys_dayco_89009.jpg',
                        item_code: '89009 (Dayco)',
                        item_note: 'Ручейковый ролик'
                    },
                    {
                        item_image: './images/engine/harmonic_balanser_mopar_04792989aa.jpg',
                        item_code: '04792989AA (Mopar)',
                        item_note: 'Шкив коленвала'
                    },

                ]},
            {subtitle: 'Приготовление смеси', id: ''},
            {subtitle: 'Головка цилиндра', id: ''},
        ]
    },
    {
        title: 'Топливная система:',
        id: 'fuel_system',
        sub_titles: [
            {subtitle: 'Бак топливный', id: ''},
            {subtitle: 'Клапан', id: ''},
            {subtitle: 'Датчик уровня топлива', id: ''},
            {subtitle: 'Регулятор давления подачи топлива', id: ''},
            {subtitle: 'Насос топливный, комплектующие', id: 'fuel_pump', items: [
                    {
                        item_image: './images/fuel_system/fuel_pump_module_mopar_cbb2f440.jpg',
                        item_code: 'CBB2F440 (Mopar)',
                        item_note: 'Модуль топливного насоса'
                    },
                ]},
        ]
    },
    {
        title: 'Система охлаждения:',
        id: 'cooling_system',
        sub_titles: [
            {subtitle: 'Термостат, прокладка', id: 'thermostat_pad', items: [
                    {
                        item_image: './images/maintenance/motorad_465-195.jpg',
                        item_code: '465-195 (Motorad)',
                        item_note: 'Термостат'
                    },
                    {
                        item_image: './images/maintenance/thermostat_stant_14789.jpg',
                        item_code: '14789 (Stant)',
                        item_note: 'Термостат'
                    },
                    {
                        item_image: './images/maintenance/thermostat_gates_33952.jpg',
                        item_code: '33952 (Gates)',
                        item_note: 'Термостат'
                    },
                    {
                        item_image: './images/maintenance/thermostat_chrysler_68210217aa.jpg',
                        item_code: '68210217AA (Chrysler)',
                        item_note: 'Термостат'
                    },
                    {
                        item_image: './images/engine/water_outlet_seal_fel-pro_35651.jpg',
                        item_code: '35651 (Fel-pro)',
                        item_note: 'Прокладка верхнего патрубка (термостата)'
                    },
                ]},
            {subtitle: 'Радиаторы маслянный, водяной', id: 'cooling_radiators', items: [
                    {
                        item_image: './images/cooling_system/coolant_reservoir_mopar_4880498ac.jpeg',
                        item_code: '4880498AC (Mopar)',
                        item_note: 'Расширительный бачок'
                    },
                    {
                        item_image: './images/cooling_system/coolant_reservoir_polcar_2460zb-2.jpg',
                        item_code: '2460ZB-2 (Polcar)',
                        item_note: 'Расширительный бачок'
                    },
                    {
                        item_image: './images/cooling_system/main_radiator_denso_drm06001.jpg',
                        item_code: 'DRM06001 (Denso)',
                        item_note: 'Основной радиатор'
                    },
                    {
                        item_image: './images/cooling_system/main_radiator_nissens_61028.JPG',
                        item_code: '61028 (Nissens)',
                        item_note: 'Основной радиатор'
                    },
                    {
                        item_image: './images/cooling_system/main_radiator_polcar_2460081.jpg',
                        item_code: '2460081 (Polcar/SRLine)',
                        item_note: 'Основной радиатор'
                    },
                    {
                        item_image: './images/cooling_system/main_radiator_sat_cr0009.jpg',
                        item_code: 'CR0009 (Sat)',
                        item_note: 'Основной радиатор (Редкостное ГАВНО)'
                    },
                    {
                        item_image: './images/cooling_system/main_radiator_stellox_10-26824-SX.JPG',
                        item_code: '10-26824-SX (Stellox)',
                        item_note: 'Основной радиатор'
                    },
                    {
                        item_image: './images/cooling_system/main_radiator_stellox_10-26890-SX.jpg',
                        item_code: '10-26890-SX (Stellox)',
                        item_note: 'Основной радиатор'
                    },
                    {
                        item_image: './images/cooling_system/main_radiator_termal_310993.jpg',
                        item_code: '310993 (Termal)',
                        item_note: 'Основной радиатор'
                    },
                    {
                        item_image: './images/cooling_system/oil_cooler_mopar_05102433aa.jpg',
                        item_code: '05102433AA (Mopar)',
                        item_note: 'Маслянный радиатор (АКПП)'
                    },
                    {
                        item_image: './images/cooling_system/oil_cooler_dorman_918208.jpg',
                        item_code: '918208 (Dorman)',
                        item_note: 'Маслянный радиатор (АКПП)'
                    },
                    {
                        item_image: './images/cooling_system/ac_condenser_nissens_94906.jpg',
                        item_code: '94906 (Nissens)',
                        item_note: 'Радиатор кондиционера'
                    },
                    {
                        item_image: './images/cooling_system/ac_condenser_denso_4770816.jpg',
                        item_code: '4770816 (Denso)',
                        item_note: 'Радиатор кондиционера'
                    },
                    {
                        item_image: './images/cooling_system/ac_condenser_thermotec_ktt110207.jpg',
                        item_code: 'KTT110207 (Thermotec)',
                        item_note: 'Радиатор кондиционера'
                    },
                ]},
            {subtitle: 'Патрубки системы охлаждения', id: 'pipe_branch', items: [
                    {
                        item_image: './images/cooling_system/radiator_hose_dayco_72215.jpg',
                        item_code: '72215 (Dayco)',
                        item_note: 'верхний патрубок основного радиатора'
                    },
                    {
                        item_image: './images/cooling_system/radiator_hose_dayco_72216.jpg',
                        item_code: '72216 (Dayco)',
                        item_note: 'нижний патрубок основного радиатора'
                    },
                    {
                        item_image: './images/cooling_system/thermostat_housing_mopar_04781387aa.jpg',
                        item_code: '04781387AA (Mopar)',
                        item_note: 'верхний патрубок (корпус термостата)'
                    },
                    {
                        item_image: './images/cooling_system/thermostat_housing_mopar_04781685aa.jpg',
                        item_code: '04781685AA (Mopar)',
                        item_note: 'нижний патрубок'
                    },
                    {
                        item_image: './images/cooling_system/thermostat_housting_dorman_902-698.jpg',
                        item_code: '902-698 (Dorman)',
                        item_note: 'верхний патрубок (корпус термостата)'
                    },
                    {
                        item_image: './images/cooling_system/thermostat_housing_dorman_902-3037.jpg',
                        item_code: '902-3037 (Dorman)',
                        item_note: 'нижний патрубок'
                    },
                    {
                        item_image: './images/engine/water_outlet_seal_fel-pro_35651.jpg',
                        item_code: '35651 (Fel-pro)',
                        item_note: 'Прокладка верхнего патрубка (термостат)'
                    },
                    {
                        item_image: './images/engine/water_outlet_seal_fel-pro_35631.jpg',
                        item_code: '35631 (Fel-pro)',
                        item_note: 'Прокладка нижнего патрубка'
                    },
                ]},
            {subtitle: 'Выключатель, датчик ОЖ', id: 'coolant_sensor', items: [
                    {
                        item_image: './images/cooling_system/coolant_temperature_sensor_mopar_05269870ab.jpg',
                        item_code: '05269870AB (Mopar)',
                        item_note: 'Датчик температуры охлаждающей жидкости'
                    },
                    {
                        item_image: './images/cooling_system/coolant_temperature_sensor_standart_tx98t.jpg',
                        item_code: 'TX98T (Standart Motor Products)',
                        item_note: 'Датчик температуры охлаждающей жидкости'
                    },
                ]},
            {subtitle: 'Вентилятор охлаждения радиатора', id: ''},
            {subtitle: 'Насос системы охлаждения (помпа)', id: 'water_pump', items: [
                    {
                        item_image: './images/cooling_system/water_pump_mopar_V9900085.jpg',
                        item_code: 'V9900095 (Mopar)',
                        item_note: 'мелкая помпа'
                    },
                    {
                        item_image: './images/cooling_system/water_pump_gmb_gwcr35a.jpeg',
                        item_code: 'GWCR35A (GMB)',
                        item_note: 'мелкая помпа'
                    },
                    {
                        item_image: './images/cooling_system/water_pump_airtex_7162.jpg',
                        item_code: '7162 (Airtex)',
                        item_note: 'мелкая помпа'
                    },
                    {
                        item_image: './images/cooling_system/water_pump_dayco_dp595.jpg',
                        item_code: 'DP595 (Dayco)',
                        item_note: 'мелкая помпа'
                    },
                    {
                        item_image: './images/cooling_system/water_pump_patron_pwp1018.jpg',
                        item_code: 'PWP1018 (Patron)',
                        item_note: 'мелкая помпа'
                    },
                    {
                        item_image: './images/cooling_system/water_pump_mopar_04792968ad.jpg',
                        item_code: '04792968AD (Mopar)',
                        item_note: 'большая помпа'
                    },
                    {
                        item_image: './images/cooling_system/water_pump_gates_43542.jpg',
                        item_code: '43542 (Gates)',
                        item_note: 'большая помпа'
                    },
                    {
                        item_image: './images/cooling_system/water_pump_gmb-gwcr43a.jpg',
                        item_code: 'GWCR43A (GMB)',
                        item_note: 'большая помпа'
                    },
                    {
                        item_image: './images/cooling_system/water_pump_airtex_1835.jpg',
                        item_code: '1835 (Airtex)',
                        item_note: 'большая помпа'
                    },
                    {
                        item_image: './images/cooling_system/water_pump_patron_pwp1217.jpg',
                        item_code: 'PWP1217 (Patron)',
                        item_note: 'большая помпа'
                    },
                ]},
        ]
    },
    {
        title: 'Система выпуска:',
        id: 'exhaust_system',
        sub_titles: [
            {subtitle: 'Нейтрализация ОГ', id: ''},
            {subtitle: 'Глушитель в сборе', id: 'exhaust', items: [
                    {
                        item_image: './images/exhaust_system/edex_4514-2.jpg',
                        item_code: '4514 (Edex)',
                        item_note: 'после катализатора'
                    },
                    {
                        item_image: './images/exhaust_system/muffler_exhaust_edex_4515.jpg',
                        item_code: '4515 (Edex)',
                        item_note: 'состоит из 2-х частей'
                    },
                    {
                        item_image: './images/exhaust_system/exhaust_ferroz_16.202.jpg',
                        item_code: '16.202 (Ferroz)',
                        item_note: 'задняя банка'
                    },
                    {
                        item_image: './images/exhaust_system/exhaust_polmostrow_19.218.jpg',
                        item_code: '19.218 (Polmostrow)',
                        item_note: 'задняя банка'
                    },

                ]},
            {subtitle: 'Датчик кислорода (лямбда-зонд)', id: 'oxygen', items: [
                    {
                        item_image: './images/exhaust_system/oxygen_sensor1_2003_mopar_04727446ad.jpg',
                        item_code: '04727446AD (Mopar)',
                        item_note: '2003-2004 ПЕРЕД катализатором (ТОЛЬКО ОРИГИНАЛ)'
                    },
                    {
                        item_image: './images/exhaust_system/oxygen_sensor2_2003_mopar_04727936ad.jpg',
                        item_code: '04727936AD (Mopar)',
                        item_note: '2003-2004 ПОСЛЕ катализатора'
                    },
                    {
                        item_image: './images/exhaust_system/oxygen_sensor1_denso_234-4411.jpg',
                        item_code: '234-4111 (Denso)',
                        item_note: '2003-2004 ПЕРЕД катализатором (он же 04727446AD)'
                    },
                    {
                        item_image: './images/exhaust_system/oxygen_sensor2_denso_234-4412.jpg',
                        item_code: '234-4112 (Denso)',
                        item_note: '2003-2004 ПОСЛЕ катализатора (он же 04727936AD)'
                    },
                    {
                        item_image: './images/exhaust_system/oxygen_sensor1_mopar_56028999ab.jpg',
                        item_code: '56028999AB (Mopar)',
                        item_note: '2005-2006 ПЕРЕД катализатором (ТОЛЬКО ОРИГИНАЛ)'
                    },
                    {
                        item_image: './images/exhaust_system/oxygen_sensor2_mopar_56028998ab.jpg',
                        item_code: '56028998AB (Mopar)',
                        item_note: '2005-2006 ПОСЛЕ катализатора'
                    },
                    {
                        item_image: './images/exhaust_system/oxygen_sensor1_denso_234-4756(999).jpg',
                        item_code: '234-4756 (Denso)',
                        item_note: '2005-2006 ПЕРЕД катализатором (аналог 56028999AB)'
                    },
                    {
                        item_image: './images/exhaust_system/oxygen_sensor2_denso_234-4744(998).jpg',
                        item_code: '234-4744 (Denso)',
                        item_note: '2005-2006 ПОСЛЕ катализатора (аналог 56028998AB)'
                    },
                    {
                        item_image: './images/exhaust_system/oxygen_sensor1_mopar_56029085aa.jpg',
                        item_code: '56029085AA (Mopar)',
                        item_note: '2005-2006 ПЕРЕД катализатором (не проверено)'
                    },
                    {
                        item_image: './images/exhaust_system/oxygen_sensor2_mopar_56029050aa.jpg',
                        item_code: '56029050AA (Mopar)',
                        item_note: '2005-2006 ПОСЛЕ катализатора (не проверено)'
                    },
                    {
                        item_image: './images/exhaust_system/oxygen_sensor1_denso_234-4880(085).jpg',
                        item_code: '234-4880 (Denso)',
                        item_note: '2005-2006 ПЕРЕД катализатором (аналог 56029085AA)'
                    },
                    {
                        item_image: './images/exhaust_system/oxygen_sensor2_denso_234-4588(050).jpg',
                        item_code: '234-4588 (Denso)',
                        item_note: '2005-2006 ПОСЛЕ катализатора (аналог 56029050AA)'
                    },

                ]},
            {subtitle: 'Коллектор впускной', id: ''},
            {subtitle: 'Трубы', id: ''},
            {subtitle: 'Детали монтажа', id: ''},
        ]
    },
    {
        title: 'Трансмиссия:',
        id: 'transmission',
        sub_titles: [
            {subtitle: 'Автоматическая коробка передач', id: '123'},
            {subtitle: 'Привод колеса', id: '456'},
            {subtitle: 'Главная передача', id: '789'},
        ]
    },
    {
        title: 'Ходовая часть:',
        id: 'chassis',
        sub_titles: [
            {subtitle: 'Пружина подвески', id: 'spring', items: [
                    {
                        item_image: './images/chassis/front_spring_obk_c4t61562h.jpg',
                        item_code: 'C4T61562H (OBK)',
                        item_note: 'Передняя пружина "колхоз"'
                    },
                    {
                        item_image: './images/chassis/rear_spring_obk_c4t6188h.jpg',
                        item_code: 'C4T6188H (OBK)',
                        item_note: 'Задняя пружина (подпилить)'
                    },
                    {
                        item_image: './images/chassis/front_spring_lesjofors_4063492.jpg',
                        item_code: '4063492 (Lesjofors)',
                        item_note: 'Передняя пружина (ещё не ставили)'
                    },
                    {
                        item_image: './images/chassis/rear_spring_lesjofors_4014219.jpg',
                        item_code: '4014219 (Lesjofors)',
                        item_note: 'Задняя пружина (ещё не ставили)'
                    },
                    {
                        item_image: './images/chassis/spring_support_monroe_908959.jpg',
                        item_code: '908959 (Monroe)',
                        item_note: 'опора передней пружины'
                    },
                ]},
            {subtitle: 'Опора амортизатора', id: 'shock_absorber_support', items: [
                    {
                        item_image: './images/chassis/shock_absorber_support_kyb_sm5266.jpg',
                        item_code: 'SM5266 (Kayaba)',
                        item_note: 'с опорным подшипником'
                    },
                    {
                        item_image: './images/chassis/shock_absorber_support_lemforder_3327001.jpg',
                        item_code: '3327001 (Lemforder)',
                        item_note: 'с опорным подшипником'
                    },
                    {
                        item_image: './images/chassis/thrust_bearing_mopar_04743044aa.jpg',
                        item_code: '04743044 (Mopar)',
                        item_note: 'опорный подшипник'
                    },
                    {
                        item_image: './images/chassis/thrust_bearing_crown_4743044aa.jpg',
                        item_code: '4743044 (Crown)',
                        item_note: 'опорный подшипник'
                    },
                    {
                        item_image: './images/chassis/reinforced_washer.jpg',
                        item_code: 'D36мм-d16мм-2.5мм',
                        item_note: 'Шайбы в опору аммортизатора (с двух сторон)'
                    },
                    {
                        item_image: './images/chassis/support_spacer.jpg',
                        item_code: '',
                        item_note: 'Проставки для увеличения клиренса'
                    },
                ]},
            {subtitle: 'Амортизатор подвески', id: 'shock_absorber', items: [
                    {
                        item_image: './images/chassis/shock_absorber_kayaba_339088.jpg',
                        item_code: '339088 (Kayaba)',
                        item_note: ''
                    },
                    {
                        item_image: './images/chassis/shock_absorber_monroe_72130.jpg',
                        item_code: '72130 (Monroe)',
                        item_note: ''
                    },
                    {
                        item_image: './images/chassis/shiels_shock_absorber_dust_kyb_910023.jpg',
                        item_code: '910023 (Kayaba)',
                        item_note: 'Комплект (2 пыльника + 2 отбойника)'
                    },
                    {
                        item_image: './images/chassis/shiels_shock_absorber_dust_moog_k201272.jpg',
                        item_code: 'K201272 (Moog)',
                        item_note: 'Комплект (пыльник + отбойник)'
                    },
                    {
                        item_image: './images/chassis/breakup_bolts_mopar_05013687ab.jpg',
                        item_code: '05013687 (Mopar)',
                        item_note: 'Развальные болты / Перед'
                    },
                    {
                        item_image: './images/chassis/breakup_bolts_moog_k90474.jpg',
                        item_code: 'K90474 (Moog)',
                        item_note: 'Развальный болт / Перед'
                    },
                ]},
            {subtitle: 'Рычаги и тяги подвески', id: 'levers_and_pulls', items: [
                    {
                        item_image: './images/chassis/front_suspension_arm_big__silent_block.jpg',
                        item_code: 'CR0124RP (VTR)',
                        item_note: 'задний/большой сайлентблок (полиуретан)'
                    },
                    {
                        item_image: './images/chassis/front_suspension_arm_small_silent_block.jpg',
                        item_code: 'CR0103RP (VTR)',
                        item_note: 'передний/малый сайлентблок (полиуретан)'
                    },
                    {
                        item_image: './images/chassis/front_suspension_arm_ball_moog_k80759.jpg',
                        item_code: 'K80759 (Moog)',
                        item_note: 'шаровая опора'
                    },
                    {
                        item_image: './images/chassis/rear_suspension_compression_link2.jpg',
                        item_code: '2975101 (Lemforder)',
                        item_note: '"вилка" (2шт)'
                    },
                    {
                        item_image: './images/chassis/rear_suspension_cumber_link2.jpg',
                        item_code: '2491401 (Lemforder)',
                        item_note: '"кривой" рычаг (2шт)'
                    },
                    {
                        item_image: './images/chassis/rear_suspension_link2.jpg',
                        item_code: '3475601 (Lemforder)',
                        item_note: '"лодка" - плавающий сайлентблок (1шт)'
                    },
                    {
                        item_image: './images/chassis/rear_beam_silent_block.jpg',
                        item_code: '3475601 (Lemforder)',
                        item_note: '"лодка" - балочный сайлентблок (1шт)'
                    },
                    {
                        item_image: './images/chassis/rear_suspension_tension_link2.jpg',
                        item_code: '2972601 (Lemforder)',
                        item_note: '"банан" (2шт)'
                    },
                    {
                        item_image: './images/chassis/rear_suspension_toe_link2.jpg',
                        item_code: '3539201 (Lemforder)',
                        item_note: 'развальный рычаг'
                    },
                    {
                        item_image: './images/chassis/',
                        item_code: '',
                        item_note: ''
                    },
                    {
                        item_image: './images/chassis/',
                        item_code: '',
                        item_note: ''
                    },
                ]},
            {subtitle: 'Стабилизатор, крепление', id: 'stabilizer', items: [
                    {
                        item_image: './images/chassis/front_stabilizer_bushings_mopar_4743163ac.jpg',
                        item_code: '4773163AC (Mopar)',
                        item_note: 'втулки стабилизатора / перед'
                    },
                    {
                        item_image: './images/chassis/rear_stabilizer_bushings_mopar_04766876ac.jpg',
                        item_code: '04766876AC (Mopar)',
                        item_note: 'втулки стабилизатора / зад'
                    },
                    {
                        item_image: './images/chassis/front_link_stabilizer_asMetal_26OP1005.jpg',
                        item_code: '26OP1005 (As Metal)',
                        item_note: 'стойки стабилизатора / перед'
                    },
                ]},
            {subtitle: 'Ступица колеса, составляющие', id: 'hub', items: [
                    {
                        item_image: './images/chassis/hub_patron_pbk51320h.jpg',
                        item_code: 'PBK51320H (Patron)',
                        item_note: ''
                    },
                    {
                        item_image: './images/chassis/hub_patron_pbk4035h.jpg',
                        item_code: 'PBK4035H (Patron)',
                        item_note: ''
                    },
                    {
                        item_image: './images/chassis/hub_nty_klp-ch-027.jpg',
                        item_code: 'KLP-CH-027 (NTY)',
                        item_note: ''
                    },
                    {
                        item_image: './images/chassis/hub_stellox_43-29070-sx.png',
                        item_code: '43-29070-SX (Stellox)',
                        item_note: ''
                    }
                ]},
            {subtitle: 'Крепление амортизатора подвески', id: ''},
            {subtitle: 'Кулак поворотный, составляющие', id: ''},
            {subtitle: 'Балка моста, подвеска оси', id: 'rear-crossmember', items: [
                    {
                        item_image: './images/chassis/rear_crossmember_small_silent_block.jpg',
                        item_code: 'Малый сайлентблок',
                        item_note: 'Размеры (для подбора)'
                    },
                    {
                        item_image: './images/chassis/rear_crossmember_big_silent_block.jpg',
                        item_code: 'Большой сайлентблок',
                        item_note: 'Размеры (для подбора)'
                    },
                    {
                        item_image: './images/chassis/rear_crossmember_small_silent_block_metal.jpg',
                        item_code: 'Малый сайлентблок',
                        item_note: 'Размеры "болванки"'
                    },
                    {
                        item_image: './images/chassis/rear_crossmember_big_silent_block_up_metal.jpg',
                        item_code: 'Большой сайлентблок',
                        item_note: 'Размеры "болванки"'
                    },
                    {
                        item_image: './images/chassis/rear_crossmember_big_silent_block_down_metal.jpg',
                        item_code: 'Большой сайлентблок',
                        item_note: 'Размеры "болванки"'
                    },

                    {
                        item_image: './images/chassis/rear_crossmember_front_bolt.jpg',
                        item_code: 'Болт малого сайлентблока',
                        item_note: 'M14X2.00X150.00'
                    },
                    {
                        item_image: './images/chassis/rear_crossmember_rear_bolt.jpg',
                        item_code: 'Болт большого сайлентблока',
                        item_note: 'M14X2.00X191.00'
                    },
                ]},
            {subtitle: 'Колесо, крепление колеса', id: ''},
            {subtitle: 'Система контроля давления в шинах', id: ''},
            {subtitle: 'Колеса, шины', id: ''},
        ]
    },
    {
        title: 'Рулевое управление:',
        id: 'steering',
        sub_titles: [
            {subtitle: 'Шарниры (рулевые наконечники)', id: 'end_tie_rod', items: [
                    {
                        item_image: './images/steering/steering_tip_ctr_cecr8.jpg',
                        item_code: 'CECR-8 (CTR)',
                        item_note: ''
                    },
                    {
                        item_image: './images/steering/steering_tip_nk_5039304.jpg',
                        item_code: '5039304 (NK)',
                        item_note: ''
                    },
                    {
                        item_image: './images/steering/steering_tip_moog-amges3614.jpg',
                        item_code: 'AMGES3614 (Moog)',
                        item_note: ''
                    },
                ]},
            {subtitle: 'Рейка рулевая, насос ГУР', id: 'booster_pump', items: [
                    {
                        item_image: './images/steering/booster_pump_motorherz_p1885hg.jpg',
                        item_code: 'P1885HG (Motorherz)',
                        item_note: 'насос без шкива'
                    },
                    {
                        item_image: './images/steering/booster_pump_patron_pps135.jpg',
                        item_code: 'PPS135 (Patron)',
                        item_note: 'насос без шкива'
                    },
                    {
                        item_image: './images/steering/pump_pulley_mopar_04861582aa.jpg',
                        item_code: '04861582AA (Mopar)',
                        item_note: 'шкив насоса ГУР'
                    },
                    {
                        item_image: './images/steering/auto-gur_ag0040.jpg',
                        item_code: 'AG0040 (AUTO-GUR)',
                        item_note: 'ремкомлект рейки'
                    },
                ]},
            {subtitle: 'Бачок ГУР', id: ''},
            {subtitle: 'Тяга рулевая', id: 'tie_rod', items: [
                    {
                        item_image: './images/steering/tie_rod_сhrysler_68032249aa.jpg',
                        item_code: '68032249AA (Chrysler)',
                        item_note: ''
                    },
                    {
                        item_image: './images/steering/tie_rod_patron_ps2201.jpg',
                        item_code: 'PS2201 (Patron)',
                        item_note: ''
                    },
                ]},
        ]
    },
    {
        title: 'Тормозная система:',
        id: 'brake_system',
        sub_titles: [
            {subtitle: 'Дисковый тормоз', id: 'brake_disk', items: [
                    {
                        item_image: './images/brake_system/front_brake_disk_patron_pbd53019.jpg',
                        item_code: 'PBD53019 (Patron)',
                        item_note: 'диск тормозной перед'
                    },
                    {
                        item_image: './images/brake_system/front_brake_disk_blue-print_ada104373.jpg',
                        item_code: 'ADA104373 (Blue Print)',
                        item_note: 'диск тормозной перед'
                    },
                    {
                        item_image: './images/brake_system/rear_brake_disk_patron_pbd7002.jpg',
                        item_code: 'PBD7002 (Patron)',
                        item_note: 'диск тормозной зад'
                    },
                    {
                        item_image: './images/brake_system/rear_brake_disk_blue-print_ada104374.jpg',
                        item_code: 'ADA104374 (Blue Print)',
                        item_note: 'диск тормозной зад'
                    },
                ]},
            {subtitle: 'Барабанный тормозной механизм', id: ''},
            {subtitle: 'Тросы, тяги и рычаги тормозной системы', id: ''},
            {subtitle: 'Стояночный тормоз', id: ''},
            {subtitle: 'Шланги тормозные', id: 'brake_hose', items: [
                    {
                        item_image: './images/brake_system/front_left_brake_hose_dorman_h620545.jpg',
                        item_code: 'H620545 (Dorman)',
                        item_note: 'Перед / Левый'
                    },
                    {
                        item_image: './images/brake_system/front_right_brake_hose_dorman_h620544.jpg',
                        item_code: 'H620544 (Dorman)',
                        item_note: 'Перед / Правый'
                    },
                    {
                        item_image: './images/brake_system/rear_left_brake_hose_dorman_h620547.jpg',
                        item_code: 'H620547 (Dorman)',
                        item_note: 'Зад / Левый'
                    },
                    {
                        item_image: './images/brake_system/rear_right_brake_hose_dorman_h620546.jpg',
                        item_code: 'H620546 (Dorman)',
                        item_note: 'Зад / Правый'
                    },

                    {
                        item_image: './images/brake_system/front_left_brake_hose_raybestos_bh382518.jpg',
                        item_code: 'BH382518 (Raybestos)',
                        item_note: 'Перед / Левый'
                    },
                    {
                        item_image: './images/brake_system/front_right_brake_hose_raybestos_bh382753.jpg',
                        item_code: 'BH322753 (Raybestos)',
                        item_note: 'Перед / Правый'
                    },
                    {
                        item_image: './images/brake_system/rear_left_brake_hose_raybestos_bh382362.jpg',
                        item_code: 'BH382362 (Raybestos)',
                        item_note: 'Зад / Левый'
                    },
                    {
                        item_image: './images/brake_system/rear_right_brake_hose_raybestos_bh382368.jpg',
                        item_code: 'BH382368 (Raybestos)',
                        item_note: 'Зад / Правый'
                    },

                ]},
            {subtitle: 'Тормозной усилитель', id: ''},
            {subtitle: 'Главный тормозной усилитель', id: ''},
            {subtitle: 'Регулировка динамики движения', id: ''},
            {subtitle: 'Выключатель фонаря сигнала торможения', id: ''},
            {subtitle: 'Суппорт тормозной', id: ''},
        ]
    },
    {
        title: 'Электрооборудование:',
        id: 'electrical_equipment',
        sub_titles: [
            {subtitle: 'Система стартера', id: ''},
            {subtitle: 'Генератор, составляющие', id: ''},
            {subtitle: 'Головной свет, составляющие', id: ''},
            {subtitle: 'Дополнительное освещение', id: ''},
            {subtitle: 'Система освещения', id: ''},
            {subtitle: 'Выключатель, реле, блок управления освещения', id: ''},
            {subtitle: 'Датчики', id: ''},
            {subtitle: 'Контрольные приборы', id: ''},
            {subtitle: 'Система очистки окон', id: ''},
            {subtitle: 'Дополнительные удобства', id: ''},
        ]
    },
    {
        title: 'Отопление/Кондиционирование',
        id: 'heating_conditioning',
        sub_titles: [
            {subtitle: 'Отопление', id: ''},
            {subtitle: 'Кондиционер', id: ''},
        ]
    },
    {
        title: 'Детали салона:',
        id: 'interior_details',
        sub_titles: [
            {subtitle: 'Подъемное устройство', id: ''},
            {subtitle: 'Ручки', id: ''},
            {subtitle: 'Багажник', id: ''},
            {subtitle: 'Замок', id: ''},
        ]
    },
    {
        title: 'Детали кузова:',
        id: 'body_parts',
        sub_titles: [
            {subtitle: 'Автомобиль, передняя часть', id: ''},
            {subtitle: 'Кабина пассажира', id: ''},
            {subtitle: 'Автомобиль, задняя часть', id: ''},
            {subtitle: 'Кузовные детали', id: ''},
            {subtitle: 'Облицовка, защитные накладки, эмблемы', id: ''},
            {subtitle: 'Остекление, зеркала', id: ''},
            {subtitle: 'Головной свет', id: ''},
            {subtitle: 'Дополнительное освещение', id: ''},
            {subtitle: 'Освещение', id: ''},
        ]
    },
]
