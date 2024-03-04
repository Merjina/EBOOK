<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Business;
use App\Models\Currency;
use App\Models\Notifications\TestEmailNotification;
use App\Models\System;
use App\Models\TaxRate;
use App\Models\Unit;
use App\Models\User;
use App\Utils\BusinessUtil;
use App\Utils\ModuleUtil;
use App\Utils\RestaurantUtil;
use Carbon\Carbon;
use DateTimeZone;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;
use Inertia\Inertia;

class BusinessController extends Controller
{
      /*
    |--------------------------------------------------------------------------
    | BusinessController
    |--------------------------------------------------------------------------
    |
    | This controller handles the registration of new business/business as well as their
    | validation and creation.
    |
    */

    /**
     * All Utils instance.
     */
    protected $businessUtil;

    protected $restaurantUtil;

    protected $moduleUtil;

    protected $mailDrivers;

    /**
     * Constructor
     *
     * @param  ProductUtils  $product
     * @return void
     */
    public function __construct(BusinessUtil $businessUtil, RestaurantUtil $restaurantUtil, ModuleUtil $moduleUtil)
    {
        $this->businessUtil = $businessUtil;
        $this->moduleUtil = $moduleUtil;

        $this->theme_colors = [
            'blue' => 'Blue',
            'black' => 'Black',
            'purple' => 'Purple',
            'green' => 'Green',
            'red' => 'Red',
            'yellow' => 'Yellow',
            'blue-light' => 'Blue Light',
            'black-light' => 'Black Light',
            'purple-light' => 'Purple Light',
            'green-light' => 'Green Light',
            'red-light' => 'Red Light',
        ];

        $this->mailDrivers = [
            'smtp' => 'SMTP',
            // 'sendmail' => 'Sendmail',
            // 'mailgun' => 'Mailgun',
            // 'mandrill' => 'Mandrill',
            // 'ses' => 'SES',
            // 'sparkpost' => 'Sparkpost'
        ];
    }



      /**
     * Shows business settings form
     *
     * @return \Illuminate\Http\Response
     */
    public function getBusinessSettings()
    {

        // if (! auth()->user()->can('business_settings.access')) {
        //     abort(403, 'Unauthorized action.');
        // }

        $timezones = DateTimeZone::listIdentifiers(DateTimeZone::ALL);
        $timezone_list = [];
        foreach ($timezones as $timezone) {
            $timezone_list[$timezone] = $timezone;
        }

        $business_id = request()->session()->get('user.business_id');

        $business = Business::where('id', $business_id)->first();

        $currencies = $this->businessUtil->allCurrencies();
        $tax_details = TaxRate::forBusinessDropdown($business_id);
        $tax_rates = $tax_details['tax_rates'];

        $months = [];
        for ($i = 1; $i <= 12; $i++) {
            $months[$i] = __('business.months.'.$i);
        }

        $accounting_methods = [
            'fifo' => __('business.fifo'),
            'lifo' => __('business.lifo'),
        ];
        $commission_agent_dropdown = [
            '' => __('lang_v1.disable'),
            'logged_in_user' => __('lang_v1.logged_in_user'),
            'user' => __('lang_v1.select_from_users_list'),
            'cmsn_agnt' => __('lang_v1.select_from_commisssion_agents_list'),
        ];

        $units_dropdown = Unit::forDropdown($business_id, true);

        $date_formats = Business::date_formats();

        $shortcuts = json_decode($business->keyboard_shortcuts, true);

        $pos_settings = empty($business->pos_settings) ? $this->businessUtil->defaultPosSettings() : json_decode($business->pos_settings, true);

        $email_settings = empty($business->email_settings) ? $this->businessUtil->defaultEmailSettings() : $business->email_settings;

        $sms_settings = empty($business->sms_settings) ? $this->businessUtil->defaultSmsSettings() : $business->sms_settings;

        $modules = $this->moduleUtil->availableModules();

        $theme_colors = $this->theme_colors;

        $mail_drivers = $this->mailDrivers;

        $allow_superadmin_email_settings = System::getProperty('allow_email_settings_to_businesses');

        $custom_labels = ! empty($business->custom_labels) ? json_decode($business->custom_labels, true) : [];

        $common_settings = ! empty($business->common_settings) ? $business->common_settings : [];

        $weighing_scale_setting = ! empty($business->weighing_scale_setting) ? $business->weighing_scale_setting : [];

        $payment_types = $this->moduleUtil->payment_types(null, false, $business_id);

        // return Inertia::render('business/Settings', compact('business', 'currencies', 'tax_rates', 'timezone_list', 'months', 'accounting_methods', 'commission_agent_dropdown', 'units_dropdown', 'date_formats', 'shortcuts', 'pos_settings', 'modules', 'theme_colors', 'email_settings', 'sms_settings', 'mail_drivers', 'allow_superadmin_email_settings', 'custom_labels', 'common_settings', 'weighing_scale_setting', 'payment_types'));
       //dd($sms_settings);
        
        return Inertia::render('business/Settings', [
            
            'business' => $business,
            'currencies'=>$currencies,
            'tax_rates'=>$tax_rates,
            'timezone_list'=>$timezone_list,
            'months'=>$months,
            'accounting_methods'=>$accounting_methods,
            'commission_agent_dropdown'=>$commission_agent_dropdown,
            'units_dropdown'=> $units_dropdown,
            'date_formats'=> $date_formats,
            'shortcuts'=>$shortcuts,
            'pos_settings'=>$pos_settings,
            'modules'=>$modules,
            'theme_colors'=>$theme_colors,
            'email_settings'=>$email_settings,
            'sms_settings'=>$sms_settings,
            'mail_drivers'=>$mail_drivers,
            'allow_superadmin_email_settings'=>$allow_superadmin_email_settings,
            'custom_labels'=>$custom_labels,
            'common_settings'=>$common_settings,
            'weighing_scale_setting'=>$weighing_scale_setting,
            'payment_types'=>$payment_types
        ]);

       // return view('business.settings', compact('business', 'currencies', 'tax_rates', 'timezone_list', 'months', 'accounting_methods', 'commission_agent_dropdown', 'units_dropdown', 'date_formats', 'shortcuts', 'pos_settings', 'modules', 'theme_colors', 'email_settings', 'sms_settings', 'mail_drivers', 'allow_superadmin_email_settings', 'custom_labels', 'common_settings', 'weighing_scale_setting', 'payment_types'));
    }
}



