using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using MerchantTribe.Commerce.Accounts;

namespace Aurora.Customizations
{
    public static class StoreSettingsExtensions
    {
        public static string HomepageTitle(this StoreSettings settings)
        {
            return settings.GetProp("HomepageTitle");
        }
    }
}
