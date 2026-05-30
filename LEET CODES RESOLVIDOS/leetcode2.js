var addTwoNumbers = function(l1, l2) {
    let carry = 0;
    let dummy = new ListNode(0);
    let atual = dummy;

    while (l1 !== null || l2 !== null || carry !== 0) {
        let soma = carry;

        if (l1 !== null) {
            soma += l1.val;
            l1 = l1.next;
        }

        if (l2 !== null) {
            soma += l2.val;
            l2 = l2.next;
        }

        carry = Math.floor(soma / 10);
        atual.next = new ListNode(soma % 10);
        atual = atual.next;
    }

    return dummy.next;
};