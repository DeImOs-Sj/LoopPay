contract;

use std::address::Address;
use std::storage::storage_vec::*;
use std::block::timestamp;


use std::{
    asset::transfer,
    auth::msg_sender,
    call_frames::msg_asset_id,
    context::msg_amount,
    context::this_balance,
};

abi Payroll {
    #[storage(write), payable]
    fn deposit_funds();

    #[storage(read)]
    fn get_contract_balance() -> u64;

    #[payable]
    #[storage(read, write)]
    fn transfer(recipient: Address, asset_id: AssetId, amount: u64);
    
     #[storage(write)]
    fn setup_recurring_payment(recipient: Address, amount: u64, interval: u64);
    
    #[storage(read, write)]
    fn process_recurring_payment(payment_id: u64) -> bool;
}

struct RecurringPayment {
    recipient: Address,
    amount: u64,
    interval: u64,
    last_payment: u64,
    is_active: bool,
}

storage {
    // amount: u64 = 0,
    total_balance: u64 = 0,
    deposits: StorageMap<Address, u64> = StorageMap {},
    depositiors_address: StorageVec<Address> = StorageVec {},
    recurring_payments: StorageVec<RecurringPayment> = StorageVec {},

}

impl Payroll for Contract {
    #[storage(write), payable]
    fn deposit_funds() {
        let amount = msg_amount();
        storage
            .total_balance
            .write(storage.total_balance.read() + amount);
    }

    #[payable]
    #[storage(read, write)]
    fn transfer(recipient: Address, asset_id: AssetId, amount: u64) {
        let asset = AssetId::from(0xf8f8b6283d7fa5b672b530cbb84fcccb4ff8dc40f8176ef4544ddb1f1952ad07);

        transfer(Identity::Address(recipient), asset, amount);
        storage.total_balance.write(storage.total_balance.read() - amount);
    }

    #[storage(read)]
    fn get_contract_balance() -> u64 {
        storage.total_balance.read()
    }
    
    
    #[storage(write)]
    fn setup_recurring_payment(recipient: Address, amount: u64, interval: u64) {
        let new_payment = RecurringPayment {
            recipient: recipient,
            amount: amount,
            interval: interval,
            last_payment: timestamp(),
            is_active: true,
        };
        storage.recurring_payments.push(new_payment);
    }
    
     #[storage(read, write)]
    fn process_recurring_payment(payment_id: u64) -> bool {
        require(payment_id < storage.recurring_payments.len(), "Invalid payment ID");

        let payment = storage.recurring_payments.get(payment_id).unwrap().read();
            let current_time = timestamp(); // Assuming correct way to get timestamp

            if payment.is_active && current_time >= payment.last_payment + payment.interval {
                if storage.total_balance.read() >= payment.amount {
                    let asset = AssetId::from(0xf8f8b6283d7fa5b672b530cbb84fcccb4ff8dc40f8176ef4544ddb1f1952ad07);

                    transfer(Identity::Address(payment.recipient), asset, payment.amount);
                    storage.total_balance.write(storage.total_balance.read() - payment.amount);

                    let updated_payment = RecurringPayment {
                        recipient: payment.recipient,
                        amount: payment.amount,
                        interval: payment.interval,
                        last_payment: current_time,
                        is_active: payment.is_active,
                    };
                    storage.recurring_payments.set(payment_id, updated_payment);
                    true
                } else {
                    false
                }
            } else {
                false
            }
     
    }
}

